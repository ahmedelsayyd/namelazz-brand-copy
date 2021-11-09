
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategotiesComponent } from "./categoties/categoties.component";
import { FavoriteComponent } from "./favorite/favorite.component";
import { NewProductsComponent } from "./new-products/new-products.component";

import { ProductDetailsComponent } from "./product-details/product-details.component";
import { SaleComponent } from "./sale/sale.component";
import { ShippingComponent } from "./shipping/shipping.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { SoonComponent } from "./soon/soon.component";
import { ThanksComponent } from "./thanks/thanks.component";




const routes: Routes = [
    {path: 'catalog', component: CategotiesComponent},
    {path: 'catalog/all', component: CategotiesComponent, data:{category: 'all'}},
    {path: 'catalog/dresses', component: CategotiesComponent, data:{category: 'dresses'}},
    {path: 'catalog/jackt&sleeveless', component: CategotiesComponent, data:{category: 'jacket & sleeveless'}},
    {path: 'catalog/tops&bodysuits', component: CategotiesComponent, data:{category: 'tops & bodysuits'}},
    {path: 'catalog/trousers&shorts', component: CategotiesComponent, data:{category: 'Trousers & Shorts'}},
    {path: 'catalog/shirts&blows', component: CategotiesComponent, data:{category: 'shirts & blouses'}},
    {path: 'catalog/t-shirt&tops', component: CategotiesComponent, data:{category: 't-shirt&tops'}},
    {path: 'catalog/outer-Wear', component: CategotiesComponent, data:{category: 'outer clothing'}},
    {path: 'catalog/suits', component: CategotiesComponent, data:{category: 'suits'}},
    {path: 'catalog/skirts', component: CategotiesComponent, data:{category: 'skirts'}},
    {path: 'new', component: NewProductsComponent},
    {path: 'sale', component: SaleComponent},
    {path: 'soon', component: SoonComponent},

    {path: 'product-details', component: ProductDetailsComponent },
    {path: 'favorites', component: FavoriteComponent},
    {path: 'cart', component: ShoppingCartComponent},
    {path: 'cart/shipping', component: ShippingComponent},
    {path: 'thanks', component: ThanksComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ShoppingRoutingModule { }