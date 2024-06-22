import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PlayoutComponent } from './playout/playout.component';
import { ReservationComponent } from './Preservation/reservation.component';

const routes: Routes = [
  {
    path: '', component: PlayoutComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {
        path: 'menu', loadChildren:() => import('./Pmenu/menu.module')
        .then(m => m.MenuModule)
      },
      {path: 'reservation', component: ReservationComponent},
      {path: 'contact', component: ContactComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
