import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalcSectionComponent} from "./calc-section.component";

@NgModule({
  declarations: [
    CalcSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalcSectionComponent
  ]
})
export class CalcSectionModule {
}
