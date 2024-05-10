import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasasCentroFormComponent } from './tasas-centro-form.component';

describe('TasasCentroFormComponent', () => {
  let component: TasasCentroFormComponent;
  let fixture: ComponentFixture<TasasCentroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasasCentroFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasasCentroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
