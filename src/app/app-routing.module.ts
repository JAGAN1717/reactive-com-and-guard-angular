import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from "./login/login.component";
import { ReactiveComponent } from './reactive/reactive.component';
import { AuthGuardGuard } from './auth-guard.guard';
import {HomeComponent} from './home/home.component'

const routes: Routes = [
  {path:'signup',component:SignupComponent,canActivate:[AuthGuardGuard]},
  {path:'login',component:LoginComponent},
  {path : "reactive",component:ReactiveComponent,canActivate:[AuthGuardGuard]},
  {path : "home",component:HomeComponent,canActivate:[AuthGuardGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
