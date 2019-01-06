import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskCenterComponent } from './task-center/task-center.component';
import { UserCenterComponent } from './user-center/user-center.component';

const routes: Routes = [
  // {path:'',component:UserCenterComponent,},

  {path:'tasks',component:TaskCenterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[TaskCenterComponent,UserCenterComponent]