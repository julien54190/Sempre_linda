import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuEntreeComponent } from './menu-entree/menu-entree.component';
import { MenuPateComponent } from './menu-pate/menu-pate.component';
import { MenuPizzaComponent } from './menu-pizza/menu-pizza.component';
import { MenuViandeComponent } from './menu-viande/menu-viande.component';
import { MenuDessertComponent } from './menu-dessert/menu-dessert.component';
import { MenulayoutComponent } from './menulayout/menulayout.component';

const routes: Routes = [
  {
  path: '',
  component: MenulayoutComponent,
  children: [
    { path: 'entrees', component: MenuEntreeComponent },
    { path: 'pates', component: MenuPateComponent },
    { path: 'pizzas', component: MenuPizzaComponent },
    { path: 'viandes', component: MenuViandeComponent },
    { path: 'desserts', component: MenuDessertComponent },
    { path: '', redirectTo: 'entrees', pathMatch: 'full' }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
