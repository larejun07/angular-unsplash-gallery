import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { GalleryService } from './gallery.service';
import { Photo } from './gallery.model';

describe('GalleryService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: GalleryService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(GalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return latest photos', (done: DoneFn) => {
    service.getLatestPhotos().subscribe({
      next: (photos: Photo[]) => {
        expect(photos.length)
          .toBeGreaterThanOrEqual(1);
        done();
      },
      error: done.fail
    });
  });
});
