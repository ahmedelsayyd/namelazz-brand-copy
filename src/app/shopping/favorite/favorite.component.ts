import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/product.model';
import { FavProducts } from 'src/app/shared/services/fav-products.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  favProducts: Observable<Product[]>
  constructor(private favService: FavProducts, private productService: ProductService) { }

  async ngOnInit() {

    this.favProducts =  this.productService.getAllProducts()
    .pipe(map(products => {
      return products.filter(p =>  p.isFavorite === true)

    }))

 

    // this.favProducts = await this.favService.getFavProducts();
    
    // (await this.favService.getFavProducts()).subscribe(x=>{
    //   console.log(x);
      
    // })
  }

}
