import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorometrosKilometrosComponent } from './horometros-kilometros.component';

describe('HorometrosKilometrosComponent', () => {
  let component: HorometrosKilometrosComponent;
  let fixture: ComponentFixture<HorometrosKilometrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorometrosKilometrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorometrosKilometrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
