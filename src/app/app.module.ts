import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SliderComponent } from './components/slider/slider.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component'

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    DashboardComponent,
    ListUsersComponent,
    LoginComponent,
    NotFoundComponent,
    ProfileComponent,
    SliderComponent,
    UpdateUserComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
