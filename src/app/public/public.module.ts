import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './Preservation/reservation.component';
import { ContactComponent } from './contact/contact.component';
import { PlayoutComponent } from './playout/playout.component';
import { PheaderComponent } from './pheader/pheader.component';
import { PfooterComponent } from './pfooter/pfooter.component';





@NgModule({
  declarations: [
    HomeComponent,
    ReservationComponent,
    ContactComponent,
    PlayoutComponent,
    PheaderComponent,
    PfooterComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  exports: [
    PheaderComponent,
    PfooterComponent
  ]
})

export class PublicModule { }
