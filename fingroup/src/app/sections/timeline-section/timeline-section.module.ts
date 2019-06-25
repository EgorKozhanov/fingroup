import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelineSectionComponent} from "./timeline-section.component";

@NgModule({
  declarations: [
    TimelineSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimelineSectionComponent
  ]
})
export class TimelineSectionModule {
}
