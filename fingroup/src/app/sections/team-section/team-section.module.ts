import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeamSectionComponent} from "./team-section.component";

@NgModule({
  declarations: [
    TeamSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TeamSectionComponent
  ]
})
export class TeamSectionModule {
}
