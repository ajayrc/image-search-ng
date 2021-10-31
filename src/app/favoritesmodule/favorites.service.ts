import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { favListUpdateAction } from '../state/actions/favlist.actions';
import { Favorite } from '../state/model/favorites';
import { State } from '../state/reducers';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  constructor(private store: Store<State>) {}

  changeFavoriteItem(favItem: Favorite) {
    this.store.dispatch(favListUpdateAction({ favItem }));
  }
}
