import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelRxComponent } from './panel-rx.component';

describe('PanelRxComponent', () => {
  let component: PanelRxComponent;
  let fixture: ComponentFixture<PanelRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelRxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
