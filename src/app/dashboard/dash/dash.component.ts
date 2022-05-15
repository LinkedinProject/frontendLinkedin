import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor(private r:Router) { }
  toggle:boolean=true
  
    getcmpany(){
  
      this.r.navigate(['admin/company'])
  
    }
    allusers(){
  
      this.r.navigate(['admin/usersregisted'])
  
    }
  
    
    userprofile(){
  
      this.r.navigate(['admin/profileuser'])
  
    }
    manageabout(){
      this.r.navigate(['admin/manageabout'])
    }
  
  tog(){
  this.toggle=false
    this.r.navigate(['admin/m'])
  }
  dashboard(){
    this.r.navigate(['admin/dashboard'])
  }
  ngOnInit(): void {
  }
  }
  