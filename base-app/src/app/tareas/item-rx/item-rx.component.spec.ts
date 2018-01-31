import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRxComponent } from './item-rx.component';

describe('ItemRxComponent', () => {
  let component: ItemRxComponent;
  let fixture: ComponentFixture<ItemRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
