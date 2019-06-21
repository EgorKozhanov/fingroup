import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalcSectionComponent } from './sections/calc-section/calc-section.component';
import { CasesSectionComponent } from './sections/cases-section/cases-section.component';
import { ClientsTypeSectionComponent } from './sections/clients-type-section/clients-type-section.component';
import { ContactsSectionComponent } from './sections/contacts-section/contacts-section.component';
import { FaqSectionComponent } from './sections/faq-section/faq-section.component';
import { FooterComponent } from './sections/footer/footer.component';
import { HeaderComponent } from './sections/header/header.component';
import { MapSectionComponent } from './sections/map-section/map-section.component';
import { ProfitSectionComponent } from './sections/profit-section/profit-section.component';
import { ReviewsSectionComponent } from './sections/reviews-section/reviews-section.component';
import { StatisticsSectionComponent } from './sections/statistics-section/statistics-section.component';
import { TeamSectionComponent } from './sections/team-section/team-section.component';
import { TimelineSectionComponent } from './sections/timeline-section/timeline-section.component';
import { WorkDescriptionSectionComponent } from './sections/work-description-section/work-description-section.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcSectionComponent,
    CasesSectionComponent,
    ClientsTypeSectionComponent,
    ContactsSectionComponent,
    FaqSectionComponent,
    FooterComponent,
    HeaderComponent,
    MapSectionComponent,
    ProfitSectionComponent,
    ReviewsSectionComponent,
    StatisticsSectionComponent,
    TeamSectionComponent,
    TimelineSectionComponent,
    WorkDescriptionSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
