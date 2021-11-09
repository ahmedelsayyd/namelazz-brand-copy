import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-categoties',
  templateUrl: './categoties.component.html',
  styleUrls: ['./categoties.component.scss']
})
export class CategotiesComponent implements OnInit, OnDestroy {

  products:Product[]
  filterProducts: Product[]
  routeData:any

  productsSub:Subscription
  
  constructor(
    private productService:ProductService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
   
    // GET ALL PRODUCTS
    this.productsSub = this.productService.getAllProducts()
    .pipe(switchMap((products:Product[])=>{
      this.products = products
      return this.route.data
    }))
    .subscribe((data)=>{
      if(data.category){
        
        if(data.category === 'all') { this.filterProducts = this.products; return}

        this.routeData = this.route.snapshot.data;
        this.filterProducts = this.products.filter(p => p.category === this.routeData.category)
      }else{
        this.filterProducts = this.products
      }
    })



    

    // this.router.events
    // .pipe(
    //   filter(e => e instanceof NavigationEnd),
    //   map(()=> this.route.snapshot))
    // .subscribe((route:ActivatedRouteSnapshot)=>{


    //   if(cat){
        
    //     if(cat === 'all') { this.filterProducts = this.products; return}

    //     this.routeData = route.data;
    //     this.filterProducts = this.products.filter(p => p.category === this.routeData.category)
    //   }else{
    //     this.filterProducts = this.products
    //   }

    // })

  }

  ngOnDestroy(){
    if(this.productsSub) this.productsSub.unsubscribe()
  }

}
