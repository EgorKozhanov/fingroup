import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkDescriptionSectionComponent} from "./work-description-section.component";

@NgModule({
  declarations: [
    WorkDescriptionSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WorkDescriptionSectionComponent
  ]
})
export class WorkDescriptionSectionModule {
}
