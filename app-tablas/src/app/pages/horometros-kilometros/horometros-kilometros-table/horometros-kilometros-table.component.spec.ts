import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorometrosKilometrosTableComponent } from './horometros-kilometros-table.component';

describe('HorometrosKilometrosTableComponent', () => {
  let component: HorometrosKilometrosTableComponent;
  let fixture: ComponentFixture<HorometrosKilometrosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorometrosKilometrosTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorometrosKilometrosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
