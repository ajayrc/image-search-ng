import { Injectable } from '@angular/core';

import { saveAs } from 'file-saver';

@Injectable()
export class DownloadService {
  constructor() {}
  downloadImage(url: string, name: string) {
    saveAs(url, name);
  }
}
