import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioComponent } from './inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InicioComponent,
        DashboardComponent
       ],
       imports: [
         ChartsModule
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
