import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruasFormComponent } from './gruas-form.component';

describe('GruasFormComponent', () => {
  let component: GruasFormComponent;
  let fixture: ComponentFixture<GruasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GruasFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GruasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
