import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { imagesGetAction } from '../actions/images.actions';
import { loaderStartAction } from '../actions/loader.actions';
import { State } from '../reducers';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  userInput!: string;

  constructor(private store: Store<State>) { }

  search(event: any) {
    this.userInput = event.target.value.toLowerCase();
    this.store.dispatch(loaderStartAction());
    this.store.dispatch(imagesGetAction({userInput: this.userInput}));
  }

}
