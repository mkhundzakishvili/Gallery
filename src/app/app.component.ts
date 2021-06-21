import {Component, OnInit} from '@angular/core';
import {GalleryService} from "./gallery/gallery.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private galleryService: GalleryService) {
  }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(): void{
    this.galleryService.getPhotos()
      .subscribe((data) => {
        this.something = data;
        console.log(this.something);
      })
  }

  title = "gallery";

  something = [];



}
