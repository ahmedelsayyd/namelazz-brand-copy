import { Component, HostListener, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cart } from 'src/app/shared/models/cart.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { UiService } from 'src/app/shared/services/ui.service';
import { toggoleLoginCardtrigger } from '../../shared/animations/animation';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [

    //annimations trigger
    toggoleLoginCardtrigger
  ]
})
export class NavigationComponent implements OnInit {

  showLoginCard: Observable<boolean>
  cart$:Observable<Cart>
  favProductsCount$:Observable<number>

  emailInputfilled
  router: any;


  @HostListener('click', ['$event']) click(e) {
    e.stopPropagation();

  }

  @HostListener('document:click', ['$event']) resetToggle(e){
      
    this.uiService.ToggoleLoginCard.next(false)
  }


  constructor(
    private authService: AuthService, 
    private cartService:ShoppingCartService,
    private productService:ProductService,
    private msg: NzMessageService,
    public uiService: UiService) { }

  async ngOnInit() {

    this.cart$ = (await this.cartService.getCart())
    this.favProductsCount$ = this.productService.getAllProducts()
    .pipe(
      map((products) =>{
          let arr = products.filter(p=> p.isFavorite === true)
          return arr.length
      }))

      this.showLoginCard = this.uiService.ToggoleLoginCard
  
  }

  openSideNav(e){
    e.stopPropagation()
    this.uiService.openSideNav.next(true)
  }



  login(form: NgForm,e) {
    e.stopPropagation()

    if(form.invalid) return

    let authData = {
      email: form.value.email,
      password: form.value.password}

    this.authService.loginWithEmailAndPassword(authData, true).then(x=>{
      this.uiService.ToggoleLoginCard.next(false)
    }).catch(error=>{
      this.msg.info(error)   
    })
  }


  loginCardState(e) {
    e.stopPropagation()
    this.uiService.ToggoleLoginCard.next(!this.authService.isLoggedIn)
    // this.isShown = !this.authService.isLoggedIn
  }


  forgetPassword(email, e){

    e.stopPropagation()

    if(email.length > 1 ){

      this.emailInputfilled = true;
      this.authService.ForgotPassword(email)

    }else{
      this.emailInputfilled = false
    }
  }
}
