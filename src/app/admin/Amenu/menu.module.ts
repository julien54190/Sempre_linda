import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MIndexComponent } from './mindex/mindex.component';
import { MEditComponent } from './medit/medit.component';
import { MAddComponent } from './madd/madd.component';
import { MDeleteComponent } from './mdelete/mdelete.component';


@NgModule({
  declarations: [
    MIndexComponent,
    MEditComponent,
    MAddComponent,
    MDeleteComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
