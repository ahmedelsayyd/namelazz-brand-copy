import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyPeriodComponent } from './warranty-period.component';

describe('WarrantyPeriodComponent', () => {
  let component: WarrantyPeriodComponent;
  let fixture: ComponentFixture<WarrantyPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarrantyPeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrantyPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
