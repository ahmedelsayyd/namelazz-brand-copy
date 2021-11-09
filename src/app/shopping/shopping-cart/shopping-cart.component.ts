import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Cart } from 'src/app/shared/models/cart.model';

import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  cart: Cart
  couponInput: string=''
  couponApplyed= false

  couponSub:Subscription
  cartSub:Subscription


  constructor(private cartService:ShoppingCartService) { }

  async ngOnInit() {

     this.cartSub = (await this.cartService.getCart()).subscribe(cart=>{
      this.cart= cart           
    })
  }


  async applyCouponDisc(code){

    this.couponApplyed= true;
    this.couponInput = '';

    this.couponSub= (await this.cartService.applyCouponDisc(code)).subscribe(cart=>{
      this.cart=cart
    })

  }

  ngOnDestroy(){
    if(this.cartSub) this.cartSub.unsubscribe();
    if(this.couponSub) this.couponSub.unsubscribe()

  }
}
