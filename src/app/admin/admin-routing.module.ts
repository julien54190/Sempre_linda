import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlayoutComponent } from './alayout/alayout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReservationComponent } from './Areservation/reservation.component';

const routes: Routes = [
  {
    path: '', component: AlayoutComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},

      { path: 'dashboard', component: DashboardComponent},
      { path: 'reservation', component: ReservationComponent},
      {
        path: 'user', loadChildren: () => import('./user/user.module')
        .then(m => m.UserModule)
      },
      {
        path: 'menu', loadChildren: () => import('./Amenu/menu.module')
        .then(m => m.MenuModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
