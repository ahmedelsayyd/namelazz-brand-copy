import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }


  logOut(){
    this.authService.logout()
    
  }
}
