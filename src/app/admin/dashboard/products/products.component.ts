import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products:Product[]
  settingValue;
  settingForm:FormGroup
  productsSubscription:Subscription

  constructor(private productService:ProductService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.productsSubscription= this.productService.getAllProducts().subscribe((products:Product[])=>{
      this.products = products
      this.settingForm.setValue({loading: false})
    })

    this.settingForm = this.fb.group({
      loading: true,
    })
    this.settingValue = this.settingForm.value;
    this.settingForm.valueChanges.subscribe(value => (this.settingValue = value));
  }


  deleteProduct(id){
    this.productService.deleteProduct(id)
    
  }
  editProduct(id){
    this.productService.getProduct(id).subscribe(p=>{
      
    })
    
  }

  ngOnDestroy(){
    if(this.productsSubscription) this.productsSubscription.unsubscribe()
  }
}
