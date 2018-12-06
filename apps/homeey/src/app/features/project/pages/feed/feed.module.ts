import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: FeedComponent
    }])
  ],
  declarations: [

    FeedComponent
  ]
})
export class FeedModule {
}
