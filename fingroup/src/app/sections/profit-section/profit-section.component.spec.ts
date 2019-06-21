import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitSectionComponent } from './profit-section.component';

describe('ProfitSectionComponent', () => {
  let component: ProfitSectionComponent;
  let fixture: ComponentFixture<ProfitSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfitSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
