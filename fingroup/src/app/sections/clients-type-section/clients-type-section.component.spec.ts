import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsTypeSectionComponent } from './clients-type-section.component';

describe('ClientsTypeSectionComponent', () => {
  let component: ClientsTypeSectionComponent;
  let fixture: ComponentFixture<ClientsTypeSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsTypeSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsTypeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
