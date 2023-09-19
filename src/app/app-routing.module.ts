import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { PhotoComponent } from './photo/photo.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: 'photo/:id',
    component: PhotoComponent
  },
  {
    path: '',
    component: GalleryComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
