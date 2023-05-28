import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageServiceService {
  getLocalStorageData(key: string) {
    let data: any;
    data = localStorage.getItem(key);
    return JSON.parse(data);
  }
  setObjectToLocalStorage(key: string, object: object) {
    localStorage.setItem(key, JSON.stringify(object));
  }
  constructor() {}
}
