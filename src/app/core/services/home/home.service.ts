import { HttpClient } from '@angular/common/http';
import { ElementSchemaRegistry } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}
  getallSlider() {
    return this.http.get('http//localhost3000/sliders-for-carusel').pipe(
      map((elements: any) => {
        return elements.map((element: any) => {
          return { img: element };
        });
      })
    );
  }
}
