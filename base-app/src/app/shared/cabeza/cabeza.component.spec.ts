import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CabezaComponent } from './cabeza.component';
import { IdiomaComponent } from '../idioma/idioma.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate';

describe('CabezaComponent', () => {
  let component: CabezaComponent;
  let fixture: ComponentFixture<CabezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CabezaComponent,
        IdiomaComponent ],
        imports: [
          FormsModule,
          TranslateModule.forRoot()
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
