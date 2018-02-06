import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVistaComponent } from './form-vista.component';

describe('FormVistaComponent', () => {
  let component: FormVistaComponent;
  let fixture: ComponentFixture<FormVistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
