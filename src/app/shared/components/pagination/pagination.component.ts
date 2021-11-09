import { Component, Input, OnInit } from '@angular/core';
import { PaginationService } from './pagination.service';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
 pagData  

  constructor(private PaginationService: PaginationService) {
        // initiate pagtination
        this.setPaginate(1)
   }

  ngOnInit(): void {


    this.PaginationService.paginate(9, 1, 3)
  }

  setPaginate(num) {
    this.PaginationService.paginate(9, num, 3)
    this.PaginationService.currentPageDetails
    .subscribe(data =>{
      this.pagData = data
    }) 
  }


}
