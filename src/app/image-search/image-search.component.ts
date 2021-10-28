import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Photo } from '../model/flickr-images';
import { State } from '../reducers';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.scss']
})
export class ImageSearchComponent implements OnInit {
  imageList$!: Observable<Photo[]>;
  loader = this.store.select(state => state.loader).pipe( loader => loader); // todo use ngrx Selector

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.imageList$ = this.store.select(state => state.images)
      .pipe(
        map(data => {
          return data.images
        })
      )
  }

}
