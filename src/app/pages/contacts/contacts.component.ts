import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class ContactsComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;

  public slides = [
    'First slide',
    'Second slide',
    'Third slide',
    'Fourth slide',
    'Fifth slide',
    'Sixth slide'
  ];

  store1Img=[
    "../../assets/img/stores/stor1-1.jpg",
    "../../assets/img/stores/stor1-2.jpg",
    "../../assets/img/stores/stor1-3.jpg",
    "../../assets/img/stores/stor1-4.jpg",
  ]

  store2Img=[
    "../../assets/img/stores/stor2-1.jpg",
    "../../assets/img/stores/stor2-2.jpg",
  ]
  

  
  constructor() { }

  ngOnInit(): void {


  }


  submit(formValue){
    
  }

}
