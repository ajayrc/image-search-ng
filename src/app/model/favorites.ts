import { Photo } from './flickr-images';

export type Favourite = {
  id: number;
  title: string;
  description: string;
  images?: Photo[];
};
