import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first, map, switchMap, take} from 'rxjs/operators';
import { PaginationService } from 'src/app/shared/components/pagination/pagination.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.scss']
})
export class BestsellersComponent implements OnInit {
  @Input() products:Observable<Product[]>
  @Input() loadedComponent;
  filteredProducts: Product[]=[]
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  startIndex
  endIndex
  pagData
  constructor(private PaginationService: PaginationService) { }

  ngOnInit(): void {

    this.products.pipe(take(1))
    .pipe(switchMap((p) => {
      this.filteredProducts = p.slice(0,9)
      return this.PaginationService.currentPageDetails
    }))
    .subscribe(data =>{
      console.log(data);
      
        this.pagData = data
        this.startIndex = this.pagData.startIndex;
        this.endIndex = this.pagData.endIndex;
    }) 
  }
}
