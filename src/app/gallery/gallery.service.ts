import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
  {providedIn: 'root'}
)
export class GalleryService {
  constructor(private http: HttpClient) { }


  getPhotos() {
    return this.http.get<any>('http://localhost:3000/photos/');
  }

  test() {
    return  this.http.post<any>('http://localhost:3000/photos/', {
      imgUrl: '1'
    });
  }
}
