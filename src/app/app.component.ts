import { Component } from '@angular/core';
import { UserService } from './users/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
    <div>
        <nav *ngIf='showNav()' class='navbar navbar-default'>
            <div class='container'>

                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse-nav" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class='navbar-brand'>{{pageTitle}}</a>
                </div>

                <div class="collapse navbar-collapse" id="collapse-nav">
                    <ul class='nav navbar-nav navbar-right'>
                        <li><a [routerLink]="['alerts']">Alerts</a></li>
                        <li><a class="pointer" (click)='logoutUser()'>Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class='container'>    
            <router-outlet></router-outlet>
        </div>
     </div> 
    `
})  

export class AppComponent {
    pageTitle: string = "Alert Service";

    constructor(private userService: UserService, private router: Router) {}

    showNav() {
        return this.userService.isLoggedIn();
    }

  logoutUser() {
    this.userService.logout();
  }

    private dosomething(message:any) {
        console.log(message)
    }
}