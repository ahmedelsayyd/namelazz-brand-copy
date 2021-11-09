import { Component, HostListener, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { UiService } from './shared/services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isCollapsed = false;
  loadedComponent

  toggoleNav: Observable<boolean>
  showLoginCard: Observable<boolean>;

  @HostListener("window:scroll", ["$event"]) onScroll(e: any): void {
    //console.log(window.innerHeight, window.outerHeight);

    this.uiService.updateScrollPosition(e.target.scrollingElement.scrollTop)
  }

  constructor(private uiService: UiService) { }

  ngOnInit() {

    this.toggoleNav = this.uiService.openSideNav;
    this.showLoginCard = this.uiService.ToggoleLoginCard

    //this.uiService.setLoadedComponent('home')
    let scrollState = combineLatest([this.uiService.scrollTopValue$, this.uiService.loadedComponent$]);
    scrollState.subscribe(([scrollTop, loadedComponent]) => {

      this.loadedComponent = loadedComponent
      this.uiService.changeNavTheme(scrollTop, loadedComponent)
    })
  }

  onActive(e,outlet) {    
    this.uiService.updateLoadedComponent(e.constructor.name);
    // outlet.scrollTop = 0;
    window.scrollTo(0, 0);
  }
}
