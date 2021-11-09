import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AccountComponent } from './account/account.component';
import { OrdersComponent } from './orders/orders.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { UserComponent } from './user.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';



@NgModule({
  declarations: [
    UserComponent,
    OrdersComponent,
    SubscriptionsComponent,
    AccountComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    NgxIntlTelInputModule, 
    
  ]
})
export class UserModule { }
