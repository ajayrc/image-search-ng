import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { FLICKR_PHOTO_SEARCH_URL } from 'src/app/configs';
import { Photo, PhotoSearch } from 'src/app/model/flickr-images';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  searchImage(query: string) {
    const params = `api_key=${environment.API_KEY}&text=${query}&format=json&nojsoncallback=1&per_page=12`;  // TODO MOVE TO CONFIGS

    return this.http.get(FLICKR_PHOTO_SEARCH_URL + params).pipe(map((result: any) => { // TODO ADD TYPE
      const urlArr: any = []; // TODO ADD TYPE
      result?.photos?.photo?.forEach((photo: Photo) => {
        const photoObj = {
          url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`, // todo bring from configs
          title: photo.title
        };
        urlArr.push(photoObj);
      });
      return urlArr;
    }));
  }

}
