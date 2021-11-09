import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';


@Component({
  selector: 'app-soon',
  templateUrl: './soon.component.html',
  styleUrls: ['./soon.component.scss']
})
export class SoonComponent implements OnInit {

  soonProducts:Product[]


  constructor(private productService:ProductService) { }

  ngOnInit(): void {

    this.productService.getAllProducts()
    .pipe(map(products => {
      return products.filter( p => p.discount > 0)
    }))
    .subscribe(products =>{
      this.soonProducts = products;
    })
  }
}
