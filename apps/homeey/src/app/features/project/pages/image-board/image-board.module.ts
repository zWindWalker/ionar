import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { ConceptComponent } from './concept/concept.component';
import { MarkerComponent } from './concept/marker/marker.component';
import { ImageBoardService } from './image-board.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'album', pathMatch: 'full' },
      { path: 'album', component: AlbumComponent },
      { path: 'album/:id', component: ConceptComponent }
    ])
  ],
  declarations: [AlbumComponent, ConceptComponent, MarkerComponent],
  providers: [ImageBoardService]
})
export class ImageBoardModule {
}
