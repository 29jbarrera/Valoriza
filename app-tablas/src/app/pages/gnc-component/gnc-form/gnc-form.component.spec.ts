import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GncFormComponent } from './gnc-form.component';

describe('GncFormComponent', () => {
  let component: GncFormComponent;
  let fixture: ComponentFixture<GncFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GncFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GncFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
