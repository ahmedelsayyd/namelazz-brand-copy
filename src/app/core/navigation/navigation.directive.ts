import { Directive, HostListener, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { UiService } from 'src/app/shared/services/ui.service';

@Directive({
  selector: '[appNavigation]'
})

export class NavigationDirective implements OnInit {



  @HostListener("window:scroll", ["$event"]) onScroll(e: any): void {
    // console.log(window.innerHeight, window.outerHeight);

    this.uiService.scrollTopValue.next(e.target.scrollingElement.scrollTop)

  }

  constructor(private uiService: UiService) { }

  ngOnInit() {

    let scrollState = combineLatest([this.uiService.scrollTopValue$, this.uiService.loadedComponent$])

    scrollState
      .subscribe(([scrollTop, loadedComponent]) => {

        let navHeight = 6.4 + 'rem';

        if (loadedComponent != "home" && scrollTop <= 5) {
          document.documentElement.style.setProperty('--nav-background', '#fbf6f2')
          document.documentElement.style.setProperty('--nav-color', '#1a1615')
          document.documentElement.style.setProperty('--nav-height', 8.4 + 'rem')

          return;
        } else if (loadedComponent != "home" && scrollTop > 5) {

          document.documentElement.style.setProperty('--nav-background', '#fbf6f2')
          document.documentElement.style.setProperty('--nav-color', '#1a1615')
          document.documentElement.style.setProperty('--nav-height', 6.4 + 'rem')

          return;
        }

        if (scrollTop > (window.innerHeight - 100)) {
          document.documentElement.style.setProperty('--nav-background', '#fbf6f2')
          document.documentElement.style.setProperty('--nav-color', '#1a1615')
          document.documentElement.style.setProperty('--nav-height', 6.4 + 'rem')
        } else {
          document.documentElement.style.setProperty('--nav-background', 'transparent')
          document.documentElement.style.setProperty('--nav-color', '#fbf6f2')
          document.documentElement.style.setProperty('--nav-height', 8.4 + 'rem')
        }

      })

  }

}
