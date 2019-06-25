import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CasesSectionComponent} from "./cases-section.component";

@NgModule({
  declarations: [
    CasesSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CasesSectionComponent
  ]
})
export class CasesSectionModule {
}
