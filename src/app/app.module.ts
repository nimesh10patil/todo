import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http'
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCenterComponent } from './user-center/user-center.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TaskCenterComponent } from './task-center/task-center.component';
import { TasklistComponent } from './tasklist/tasklist.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCenterComponent,
    RegisterComponent,
    LoginComponent,
    TaskCenterComponent,
    TasklistComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
