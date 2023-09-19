import { Component, OnDestroy, OnInit } from '@angular/core';
import { GalleryService } from './gallery.service';
import { Observable } from 'rxjs';
import { Photo } from './gallery.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {
  photos$: Observable<Photo[]> | undefined;
  
  constructor(
    private gallerySvc: GalleryService
  ) { }

  ngOnInit(): void {
    this.photos$ = this.gallerySvc.getLatestPhotos();
  }

  ngOnDestroy(): void {
    delete this.photos$;
  }

}
