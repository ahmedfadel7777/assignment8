import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { userGuard } from './guards/user.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', canActivate: [userGuard], component: DashboardComponent, children: [
      { path: '', redirectTo: 'listusers', pathMatch: 'full' },
      { path: 'listusers', component: ListUsersComponent },
      { path: 'adduser', component: AddUserComponent },
      { path: 'updateuser/:id', component: UpdateUserComponent },
      { path: 'profile/:id', component: ProfileComponent },
      { path: '**', component: NotFoundComponent },
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
