import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UIndexComponent } from './uindex/uindex.component';
import { UEditComponent } from './uedit/uedit.component';
import { UAddComponent } from './uadd/uadd.component';
import { UDeleteComponent } from './udelete/udelete.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UIndexComponent,
    UEditComponent,
    UAddComponent,
    UDeleteComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
