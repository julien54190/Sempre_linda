import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UIndexComponent } from './uindex/uindex.component';
import { UEditComponent } from './uedit/uedit.component';
import { UAddComponent } from './uadd/uadd.component';
import { UDeleteComponent } from './udelete/udelete.component';

const routes: Routes = [
  { path: '', component: UIndexComponent},
  { path: 'edit/:uid', component: UEditComponent},
  { path: 'add', component: UAddComponent},
  { path: 'delete/:uid', component: UDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
