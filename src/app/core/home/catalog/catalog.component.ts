import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  @Input() loadedComponent
  filterdProducts

  catalogProduct=[
    {
      category: 'jackets & Sleeves',
      name: '',
      price: 7500,
      image:'../../../../assets/img/home/catalog-1.jpg'

    },
    {
      category: 'jumpsuits',
      name: '',
      price: 7500,
      image:'../../../../assets/img/home/catalog-2.jpg'
    },    {
      category: 'dresses',
      name: '',
      price: 7500,
      image:'../../../../assets/img/home/catalog-3.jpg'
    }
  ]
  constructor(private productSerice:ProductService) { }

  ngOnInit(): void {
    
  }

}
