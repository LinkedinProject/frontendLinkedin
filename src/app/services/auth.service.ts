import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { HomeService } from './home.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor( public h: HomeService ,private r:Router) { }


  d(e :any) {
    // alert(e.value)
    this.r.navigate([''])
    this.h.m = 'login sucsessfuly'
    this.h.t=1;
  }



}
