import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { imagesGetAction } from '../../state/actions/images.actions';
import { loaderStartAction } from '../../state/actions/loader.actions';
import { State } from '../../state/reducers';

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
