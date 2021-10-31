import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DownloadService } from 'src/app/common-services/file-download.service';
import { favListUpdateAction } from 'src/app/state/actions/favlist.actions';
import {
  Favorite,
  FavoriteForm,
  FavoriteFormFields,
} from 'src/app/state/model/favorites';
import { Photo } from 'src/app/state/model/flickr-images';
import { State } from 'src/app/state/reducers';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-favoritespage',
  templateUrl: './favoritespage.component.html',
  styleUrls: ['./favoritespage.component.scss'],
  providers: [DownloadService],
})
export class FavoritespageComponent implements OnInit {
  favListForm$!: Observable<FavoriteForm[]>;

  constructor(
    private fb: FormBuilder,
    private store: Store<State>,
    private downloadService: DownloadService,
    private favService: FavoritesService
  ) {}

  ngOnInit(): void {
    // get existing fav list names from store and add form controls to each (not implemented)
    this.favListForm$ = this.store
      .select((state) => state.favList.favList)
      .pipe(
        map((list) => {
          return list.map((favItem: Favorite) => {
            const formFields = this.generateFavroiteListForm(favItem); // N.B. useful when reactive forms used
            return {
              ...favItem,
              ...formFields,
            };
          });
        })
      );
  }

  generateFavroiteListForm(favItem: Favorite): FavoriteFormFields {
    // N.B. should be moved to compo service
    return {
      titleControl: this.fb.control(favItem.title, []),
      descriptionContorl: this.fb.control(favItem.description, []),
    };
  }

  changeTitle(favItem: Favorite, $event: any) {
    favItem.title = $event.target.value;
    this.favService.changeFavoriteItem(favItem);
  }

  changeDescription(favItem: Favorite, $event: any) {
    favItem.description = $event.target.value;
    this.favService.changeFavoriteItem(favItem);
  }

  download(image: Photo) {
    this.downloadService.downloadImage(image.url, image.title);
  }
}
