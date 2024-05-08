import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GncComponent } from './gnc.component';

describe('GncComponent', () => {
  let component: GncComponent;
  let fixture: ComponentFixture<GncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GncComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
