import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FavlistmodalComponent } from '../common-components/favlistmodal/favlistmodal.component';
import { Photo } from '../state/model/flickr-images';
import { State } from '../state/reducers';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.scss']
})
export class ImageSearchComponent implements OnInit {
  imageList$!: Observable<Photo[]>;
  loader = this.store.pipe(select(state => state.loader.isLoading)); // todo use ngrx Selector

  constructor(private store: Store<State>, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.imageList$ = this.store.select(state => state.images)
      .pipe(
        map(data => {
          return data.images
        })
      )
  }

  saveToFavorites(image: Photo) {
    const modalRef = this.modalService.open(FavlistmodalComponent, { size: 'lg' }); 
    modalRef.componentInstance.image = image;
  }

}