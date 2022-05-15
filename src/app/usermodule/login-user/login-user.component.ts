import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email])
  pass = new FormControl('', [Validators.required])

  constructor(public homs: HomeService, private r: Router) { }

  ngOnInit(): void {
  }

  s() {
    this.homs.getid(this.email, this.pass);
    this.homs.companyid(this.email, this.pass)
     this.homs.submit(this.email, this.pass);


  }

  goToRegisterPage() {
    this.r.navigate(['user/register'])
  }

  }

