import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginComponent } from '../components/login-signup-system/login/login.component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  bsModalRef?: BsModalRef;
  constructor(
    private cookieService: CookieService,
    private router: Router,
    private modalService: BsModalService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let isAuth = this.cookieService.get('login');

    if (isAuth === 'true') {
      return true;
    }

    this.router.navigate(['']);
    this.bsModalRef = this.modalService.show(LoginComponent);
    return false;
  }
}
