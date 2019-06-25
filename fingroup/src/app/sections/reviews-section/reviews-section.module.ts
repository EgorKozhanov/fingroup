import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReviewsSectionComponent} from "./reviews-section.component";

@NgModule({
  declarations: [
    ReviewsSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReviewsSectionComponent
  ]
})
export class ReviewsSectionModule {
}
