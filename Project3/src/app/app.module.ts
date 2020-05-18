import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { BetlistComponent } from './betlist/betlist.component';
import { YouComponent } from './you/you.component';
import { LoginComponent } from './login/login.component';
import { JoinComponent } from './join/join.component';
import { PersonalComponent } from './personal/personal.component';
import { BetformComponent } from './betform/betform.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    BetlistComponent,
    YouComponent,
    LoginComponent,
    JoinComponent,
    PersonalComponent,
    BetformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
