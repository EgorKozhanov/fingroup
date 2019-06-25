import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatisticsSectionComponent} from "./statistics-section.component";

@NgModule({
  declarations: [
    StatisticsSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatisticsSectionComponent
  ]
})
export class StatisticsSectionModule {
}
