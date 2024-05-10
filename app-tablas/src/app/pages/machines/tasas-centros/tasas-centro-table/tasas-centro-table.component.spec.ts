import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasasCentroTableComponent } from './tasas-centro-table.component';

describe('TasasCentroTableComponent', () => {
  let component: TasasCentroTableComponent;
  let fixture: ComponentFixture<TasasCentroTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasasCentroTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasasCentroTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
