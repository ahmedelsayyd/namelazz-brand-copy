import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { toggoleSideNavtrigger, toggoleDropdowntrigger } from 'src/app/shared/animations/animation';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UiService } from 'src/app/shared/services/ui.service';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [

    //annimations trigger
    toggoleSideNavtrigger,
    toggoleDropdowntrigger
  ]
})
export class SideNavComponent implements OnInit {
  slideDown:boolean = false;
  toggoleNav: Observable<boolean>

  activeSubMenue:string
  subMenue ={
    catalog : {isOpened: false},
    projects:{isOpened: false},
    buyers: {isOpened: false}
  }


  @HostListener('click', ['$event']) click(e) {
    e.stopPropagation();

  }

  @HostListener('document:click', ['$event']) resetToggle(e){
      console.log(e);
      
    this.uiService.openSideNav.next(false)
  }

  constructor(private uiService:UiService, public authService:AuthService, private route:Router) { }

  ngOnInit(): void {
    this.toggoleNav = this.uiService.openSideNav;
  }


  toggoleSideNav(e){
    e.stopPropagation()
    this.uiService.openSideNav.next(false)
  }


  toggoleSubMenu(menuName){
    for(let i in this.subMenue){
      if(i == menuName){
        
        this.subMenue[i].isOpened = !this.subMenue[i].isOpened;
        this.subMenue[i].isOpened ? this.activeSubMenue = menuName : this.activeSubMenue = '';

      }else{
        this.subMenue[i].isOpened = false
      }      
    }

  }


  navigateTo(path){
    this.uiService.openSideNav.next(false)
    this.route.navigate([path])
  }


  navigateUser(){
    this.uiService.openSideNav.next(false)
    if(this.authService.isLoggedIn) {
      this.route.navigate(['/user/account'])
    }else{
      this.route.navigate(['/login'])
    }
  }

}
function HostListner(arg0: string) {
  throw new Error('Function not implemented.');
}

