import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  constructor(private r: Router) { }
  updateuser(){

    this.r.navigate(['user/editprofile'])

  }
  applied(){

    this.r.navigate(['user/applied'])

  }
  editedu(){
    this.r.navigate(['user/editedu'])

  }

  ngOnInit(): void {
  }
  clears(){
    localStorage.clear()
      this.r.navigate(['loginuser'])
    }
}
