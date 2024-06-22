import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuEntreeComponent } from './menu-entree/menu-entree.component';
import { MenuPizzaComponent } from './menu-pizza/menu-pizza.component';
import { MenuPateComponent } from './menu-pate/menu-pate.component';
import { MenuViandeComponent } from './menu-viande/menu-viande.component';
import { MenuDessertComponent } from './menu-dessert/menu-dessert.component';
import { PanierComponent } from './panier/panier.component';




@NgModule({
  declarations: [
    MenuEntreeComponent,
    MenuPizzaComponent,
    MenuPateComponent,
    MenuViandeComponent,
    MenuDessertComponent,
    PanierComponent,
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ],
  exports: [
    PanierComponent
  ]
})
export class MenuModule { }
