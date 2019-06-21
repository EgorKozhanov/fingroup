import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDescriptionSectionComponent } from './work-description-section.component';

describe('WorkDescriptionSectionComponent', () => {
  let component: WorkDescriptionSectionComponent;
  let fixture: ComponentFixture<WorkDescriptionSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkDescriptionSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkDescriptionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
