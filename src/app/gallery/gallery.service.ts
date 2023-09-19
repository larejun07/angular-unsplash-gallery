import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Photo } from './gallery.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private accessKey: string;
  private apiUrl: string;
  
  constructor(private http: HttpClient) {
    this.apiUrl = environment.unslpashApi;
    this.accessKey = environment.unslpashAccessKey;
  }

  getLatestPhotos(): Observable<Photo[]> {
    const url = `${this.apiUrl}/photos`;

    return this.http.get<Photo[]>(url, {
      headers: {
        'Accept-Version': 'v1',
        'Authorization': `Client-ID ${this.accessKey}`
      }
    });
  }

  getPhoto(id: string): Observable<Photo> {
    const url = `${this.apiUrl}/photos/${id}`;

    return this.http.get<Photo>(url, {
      headers: {
        'Accept-Version': 'v1',
        'Authorization': `Client-ID ${this.accessKey}`
      }
    });
  }
}
