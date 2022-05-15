import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  constructor(private r: Router, private h :HomeService , private to: ToastrService,private s :NgxSpinnerService) {

  }

  ngOnInit(): void {
    this.h.getWebsite();
    this.h.getContact();
    this.h.getabout();

    setTimeout(() => {
      
    }, 1000);
    console.log(this.h.about);
    
  }

  GoToLogin() {
    this.r.navigate(['welcometo'])
    this.to.success("Welcome to Linkedin ");


  }
  GoTohome() {
    this.r.navigate(['home']) .then(() => {
    window.location.reload();
  });
    

    this.s.show();

    setTimeout(() => {
      window.location.reload
      this.s.hide();
    }, 1500);
  }
}