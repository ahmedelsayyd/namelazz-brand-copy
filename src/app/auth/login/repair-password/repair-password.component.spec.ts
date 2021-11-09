import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairPasswordComponent } from './repair-password.component';

describe('RepairPasswordComponent', () => {
  let component: RepairPasswordComponent;
  let fixture: ComponentFixture<RepairPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
