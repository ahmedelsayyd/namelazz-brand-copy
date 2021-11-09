import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { Order } from '../models/order.model';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private fs:AngularFirestore, private cartService:ShoppingCartService) { }

  placeOrder(orderData:Order) {

    let order = {...orderData}
    
    return this.fs.collection('orders').doc('/orders-list').collection(`/orders`).add(order).then(()=>{

      this.cartService.clearCart()
    })
  }

  getOrders(){
    return this.fs.collection('orders/orders-list/orders').valueChanges()
  }

  getOrderByUserId(userId){
    return this.fs.doc(`orders/${userId}`).valueChanges()
  }

  updateNumOfOrders(orderCount){
    let obj = {count: orderCount}
    return this.fs.doc(`orders/orders-count`).set({...obj})
  }

  
  getNumOfOrders(){
    return this.fs.doc<number>(`orders/orders-count`).valueChanges()
  }
}
