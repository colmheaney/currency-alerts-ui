import { Injectable } from '@angular/core';
import { 
  CanActivate, 
  Router,
  ActivatedRouteSnapshot, 
  RouterStateSnapshot
} from '@angular/router';
import { UserService } from './users/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private user: UserService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.user.isLoggedIn()) {
      return true;
    }
    
    this.router.navigate(['']);
    return false;
  }
}