import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { YouComponent } from './you/you.component';
import { LoginComponent } from './login/login.component';
import { JoinComponent } from './join/join.component';
import {PersonalComponent} from './personal/personal.component'; 
import {BetformComponent} from './betform/betform.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'about',component: AboutComponent},
  {path:'you',component: YouComponent},
  {path:'login',component: LoginComponent},
  {path:'join',component: JoinComponent},
  {path:'personal',component: PersonalComponent},
  {path:'betform', component: BetformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
