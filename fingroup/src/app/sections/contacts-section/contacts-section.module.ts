import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactsSectionComponent} from "./contacts-section.component";

@NgModule({
  declarations: [
    ContactsSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContactsSectionComponent
  ]
})
export class ContactsSectionModule {
}
