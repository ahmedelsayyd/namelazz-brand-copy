import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Order } from 'src/app/shared/models/order.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Order[]
  constructor(private orderService: OrderService, private authSercice:AuthService) { }

  ngOnInit(): void {

    this.orderService.getOrders().pipe(take(1)).subscribe((orders: Order[])=>{
      this.orders= orders
       
    });
  }


  formatDate(date){
    return new Date(date).toLocaleString()
  }
}
