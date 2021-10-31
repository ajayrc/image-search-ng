import { FormControl } from '@angular/forms';
import { Photo } from './flickr-images';

export type Favorite = {
  id: number;
  title: string;
  description: string;
  images?: Photo[];
};

export type FavoriteFormFields = {
  titleControl: FormControl;
  descriptionContorl: FormControl;
};

export type FavoriteForm = Favorite & FavoriteFormFields;
