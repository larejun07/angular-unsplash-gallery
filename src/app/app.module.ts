import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PhotoComponent } from './photo/photo.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GalleryService } from './gallery/gallery.service';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    PhotoComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    GalleryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
