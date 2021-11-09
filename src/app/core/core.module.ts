import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CoreRoutingModule } from "./core-routing.module";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./home/header/header.component";
import { HomeComponent } from "./home/home.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { NavigationDirective } from "./navigation/navigation.directive";
import { BestsellersComponent } from './home/bestsellers/bestsellers.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { CatalogComponent } from './home/catalog/catalog.component';
import { LookbookComponent } from './home/lookbook/lookbook.component';
import { SharedModule } from "../shared/shared.module";
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { SideNavComponent } from './side-nav/side-nav.component';


@NgModule({
    declarations: [
        HomeComponent,
        NavigationComponent,
        HeaderComponent,
        FooterComponent,
        NavigationDirective,
        BestsellersComponent,
        AboutUsComponent,
        CatalogComponent,
        LookbookComponent,
        SideNavComponent,
    ],

    imports: [
        CoreRoutingModule, 
        FormsModule, 
        CommonModule, 
        SharedModule, 
        NzBadgeModule],
    exports: [NavigationComponent, FooterComponent, HomeComponent, SideNavComponent]
})
export class CoreModule { }