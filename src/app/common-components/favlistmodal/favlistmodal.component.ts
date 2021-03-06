import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  favListAddImageAction,
  favListCreateAction,
} from '../../state/actions/favlist.actions';
import { Favorite } from '../../state/model/favorites';
import { Photo } from '../../state/model/flickr-images';
import { State } from '../../state/reducers';

@Component({
  selector: 'app-favlistmodal',
  templateUrl: './favlistmodal.component.html',
  styleUrls: ['./favlistmodal.component.scss'],
})
export class FavlistmodalComponent implements OnInit {
  @Input() image: Photo | undefined;

  fakeUUID: number = 0; // this should come from Server as id of the newly inserted favorite list item
  createFavroiteListForm!: FormGroup;
  favList$!: Observable<Favorite[]>;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.favList$ = this.store.select((state) => state.favList.favList); // get existing fav list names from store
    this.generateFavroiteListForm();
  }

  generateFavroiteListForm(): void {
    this.createFavroiteListForm = this.fb.group({
      title: this.fb.control(null, [
        Validators.required,
        Validators.minLength(2), // fyi - see https://github.com/angular/angular/issues/7407 for related markup
      ]),
      description: this.fb.control(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
    });
  }

  addImageToList(listItem?: Favorite): boolean {
    this.store.dispatch(
      favListAddImageAction({ favItem: listItem!, image: this.image! })
    );
    return false;
  }

  onCreateFavroiteList(): void {
    const userFormValue = this.createFavroiteListForm.value;

    if (!this.createFavroiteListForm.valid) {
      return;
    }

    const { title, description } = userFormValue;
    this.fakeUUID++;

    // add new fav list to state
    this.store.dispatch(
      favListCreateAction({
        favItem: { id: this.fakeUUID, title, description },
      })
    );
  }
}
