import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(private router:Router,private tos:ToastrService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
    //true -->if there is a token 
    const token = localStorage.getItem('token');
    if (token) {
      console.log(state);
      // /admin/dashboard
      if (state.url.indexOf('company/companyhome') >= 0) {
        let user: any = localStorage.getItem('user');
        if (user) {
          user = JSON.parse(user);
          if (user.role == '2') {

            return true;
          }
          //acc , customer 
          else {
            this.tos.error('You are not authorized to access this page')

            return false;
          }
          //
        }

        else {
          return false;
        }
      }
      else if (state.url.indexOf('user/editprofile') >= 0){
        let user: any = localStorage.getItem('user');
        if (user) {
          user = JSON.parse(user);
          if (user.role == '1') {
            return true;
          }
          //acc , customer 
          else {
            this.tos.error('You are not authorized to access this page')
            this.router.navigateByUrl('http://localhost:4200/home')
            return false;
          
          }
        }
      }
      else if (state.url.indexOf('admin') >= 0) {
        let user: any = localStorage.getItem('user');
        if (user) {
          user = JSON.parse(user);
          if (user.role == '3') {
            return true;
          }
          //acc , customer 
          else {
            this.tos.error('You are not authorized to access this page')
            return false;

          }
        }
      }
      else if (state.url.indexOf('wall') >= 0) {
        let user: any = localStorage.getItem('user');
        if (user) {
          user = JSON.parse(user);
          if (user.role == '1'||user.role=='2') {
            return true;
          }
          //acc , customer 
          else {
            this.tos.error('You are not authorized to access this page')
            return false;

          }
        }
      }
      return true;
    }




    else {
      this.router.navigate(['security/login']);
      return false;
    }

  }

}



    
  