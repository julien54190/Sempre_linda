import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReservationComponent } from './Areservation/reservation.component';
import { AlayoutComponent } from './alayout/alayout.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AheaderComponent } from './aheader/aheader.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ReservationComponent,
    AlayoutComponent,
    SidemenuComponent,
    AheaderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
