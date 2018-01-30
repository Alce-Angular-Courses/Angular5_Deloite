import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IdiomaComponent } from './idioma.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate';

describe('IdiomaComponent', () => {
  let component: IdiomaComponent;
  let fixture: ComponentFixture<IdiomaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiomaComponent ],
      imports: [
        FormsModule,
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
