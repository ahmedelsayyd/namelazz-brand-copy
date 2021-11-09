import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAndShippingComponent } from './payment-and-shipping.component';

describe('PaymentAndShippingComponent', () => {
  let component: PaymentAndShippingComponent;
  let fixture: ComponentFixture<PaymentAndShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentAndShippingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentAndShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
