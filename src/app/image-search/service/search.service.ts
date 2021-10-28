import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { FLICKER_PERSON_URL, FLICKR_PHOTO_SEARCH_URL } from 'src/app/configs';
import { Photo } from 'src/app/model/flickr-images';

@Injectable({
  providedIn: 'root', // todo provide only where needed
})
export class SearchService {
  constructor(private http: HttpClient) {}

  searchImage(query: string) {
    const params = `api_key=${environment.API_KEY}&text=${query}&format=json&nojsoncallback=1&per_page=12`; // TODO MOVE TO CONFIGS

    return this.http.get(FLICKR_PHOTO_SEARCH_URL + params).pipe(
      map((result: any) => { // TODO ADD API response TYPE
        const urlArr: Photo[] = [];
        result?.photos?.photo?.forEach((photo: Photo) => {
          const photoObj = {
            id: photo.id,
            url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`, // todo bring from configs/use tagged templates or util function
            title: photo.title,
            owner: photo.owner,
            ownerUrl: FLICKER_PERSON_URL(photo.owner),
          };
          urlArr.push(photoObj);
        });
        return urlArr;
      })
    );
  }
}
