import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesSectionComponent } from './cases-section.component';

describe('CasesSectionComponent', () => {
  let component: CasesSectionComponent;
  let fixture: ComponentFixture<CasesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
