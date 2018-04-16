import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionnalExpComponent } from './professionnal-exp.component';

describe('ProfessionnalExpComponent', () => {
  let component: ProfessionnalExpComponent;
  let fixture: ComponentFixture<ProfessionnalExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionnalExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionnalExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
