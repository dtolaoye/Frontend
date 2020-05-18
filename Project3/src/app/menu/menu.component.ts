import { Component, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {
  title = 'Project3';

  ngOnInit(): void{
    
  }

  get loggedIn():boolean{
    return this.authSvc.loggedIn;
  }
  constructor(public authSvc:AuthService) {
    authSvc.authorize();
  }

  signout(){
    this.authSvc.logout();
    return false;
  }
  @Input() activeClass = 'active';
}