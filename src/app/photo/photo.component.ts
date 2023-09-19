import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, Subscription, catchError, of } from 'rxjs';

import { GalleryService } from '../gallery/gallery.service';
import { Photo } from '../gallery/gallery.model';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit, OnDestroy {
  photo$: Observable<Photo> | undefined;
  photoErr$ = new Subject<boolean>();
  private sub: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private gallerySvc: GalleryService
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.photo$ = this.gallerySvc.getPhoto(params['id'])
        .pipe(
          catchError(() => {
            this.photoErr$.next(true);
            return of();
          })
        );
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    delete this.sub;
    delete this.photo$;
  }

}
