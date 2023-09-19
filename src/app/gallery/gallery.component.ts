import { Component, OnDestroy, OnInit } from '@angular/core';
import { GalleryService } from './gallery.service';
import { Observable, Subject, catchError, of } from 'rxjs';
import { Photo } from './gallery.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {
  photos$: Observable<Photo[]> | undefined;
  photosErr$ = new Subject<boolean>();
  
  constructor(
    private gallerySvc: GalleryService
  ) { }

  ngOnInit(): void {
    this.photos$ = this.gallerySvc.getLatestPhotos()
      .pipe(
        catchError(() => {
          this.photosErr$.next(true);
          return of();
        })
      );
  }

  ngOnDestroy(): void {
    delete this.photos$;
  }

}
