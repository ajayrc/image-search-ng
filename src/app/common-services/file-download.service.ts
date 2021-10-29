import { Injectable } from '@angular/core';

declare var require: any;
const FileSaver = require('file-saver');

@Injectable()
export class DownloadService {
  constructor() {}
  downloadImage(url: string, name: string) {
    FileSaver.saveAs(url, name);
  }
}
