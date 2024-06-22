import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MAddComponent } from './madd/madd.component';
import { MDeleteComponent } from './mdelete/mdelete.component';
import { MEditComponent } from './medit/medit.component';
import { MIndexComponent } from './mindex/mindex.component';

const routes: Routes = [
  { path: '', component: MIndexComponent},
  { path: 'edit/:mid', component: MEditComponent},
  { path: 'add', component: MAddComponent},
  { path: 'delete/:mid', component: MDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
