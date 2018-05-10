import { Injectable }     from '@angular/core';
import { CanActivate, Router }    from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { UserService } from "./user.service";
import { UserEntity } from "./user.entity";

import { Observable } from 'rxjs/Observable';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import 'rxjs/add/operator/do'

@Injectable()
export class UserGuard implements CanActivate, HttpInterceptor {
  private user;
  constructor(
    private router: Router,
    private userService: UserService,
  ) {
    userService.getUser().subscribe(data => {
      this.user = data;
    });
  }

  canActivate() {
    return this.checkUser();
  }

  private checkUser() {
    try {
        let user = new UserEntity(this.user);
        return true;
    }
    catch (e) {
       this.router.navigate(['/register']);
       return false;
    }
  }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).do((event: HttpEvent<any>) => {}, (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/register']);
            }
          }
        });
    }
}
