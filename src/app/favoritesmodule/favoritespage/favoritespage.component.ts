import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DownloadService } from 'src/app/common-services/file-download.service';
import { Favourite } from 'src/app/state/model/favorites';
import { Photo } from 'src/app/state/model/flickr-images';
import { State } from 'src/app/state/reducers';

@Component({
  selector: 'app-favoritespage',
  templateUrl: './favoritespage.component.html',
  styleUrls: ['./favoritespage.component.scss'],
  providers: [DownloadService]
})
export class FavoritespageComponent implements OnInit {
  favList$!: Observable<Favourite[]>;
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<State>, private downloadService: DownloadService) {}

  ngOnInit(): void {
    this.favList$ = this.store.select((state) => state.favList.favList); // get existing fav list names from store
    // this.generateFavroiteListForm();
  }

  // generateFavroiteListForm(): void {
  //   let favFormGroup: any = {};
  //   this.favList$.subscribe((favorites: Favourite[]) => { 
  //     favorites.forEach((favItem: Favourite) => {
  //       favFormGroup['title'] = this.fb.control(favItem.title, []);
  //       favFormGroup['description'] = this.fb.control(favItem.description, []);
  //       // this.formGroup.addControl(new FormGroup(favFormGroup))
  //      })
  //   })
  // }

  download(image: Photo) {
    this.downloadService.downloadImage(image.url, image.title);
  }
}
