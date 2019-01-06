import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskCenterComponent } from './task-center/task-center.component';

const routes: Routes = [
  {path:'tasks',component:TaskCenterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[TaskCenterComponent]