import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GncTableComponent } from './gnc-table.component';

describe('GncTableComponent', () => {
  let component: GncTableComponent;
  let fixture: ComponentFixture<GncTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GncTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GncTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
