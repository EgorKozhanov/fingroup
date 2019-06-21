import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcSectionComponent } from './calc-section.component';

describe('CalcSectionComponent', () => {
  let component: CalcSectionComponent;
  let fixture: ComponentFixture<CalcSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
