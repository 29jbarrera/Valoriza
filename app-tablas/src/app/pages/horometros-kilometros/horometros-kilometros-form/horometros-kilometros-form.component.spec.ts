import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorometrosKilometrosFormComponent } from './horometros-kilometros-form.component';

describe('HorometrosKilometrosFormComponent', () => {
  let component: HorometrosKilometrosFormComponent;
  let fixture: ComponentFixture<HorometrosKilometrosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorometrosKilometrosFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorometrosKilometrosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
