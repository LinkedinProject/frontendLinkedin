import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EmailComponent } from 'src/app/email/email.component';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-c-u',
  templateUrl: './c-u.component.html',
  styleUrls: ['./c-u.component.css']
})
export class CUComponent implements OnInit {
 i :any
  constructor(public h: HomeService, private dialog: MatDialog) { }
  email() {
    this.dialog.open(EmailComponent);
  }
  ngOnInit(): void {

    // this.h.recommendations = []


    this.i = sessionStorage.getItem('i')

    // this.recommendLetter = this.h.recommendations.length
    this.h.userbyid(this.i)
    this.h.usereducation(this.i)


    // setTimeout(() => {
    //   this.recommendLetter = this.h.recommendations.length
    //   console.log(this.h.recommendations);
    //   console.log(this.recommendLetter);

    // }, 2000);
  }

  // GetRecommenndationResever() {
  //   this.h.GetRecommenndationResever(this.i)
  //   this.recommendLetter = this.h.recommendations.length
  //   setTimeout(() => {


  //     console.log(this.h.recommendations);

  //   }, 2000);
  // }

  // GetRecommenndationSender() {
  //   this.h.GetRecommenndationSender(this.i)
  //   this.recommendLetter = this.h.recommendations.length
  //   setTimeout(() => {


  //     console.log(this.h.recommendations);
  //   }, 2000);
  // }

  // recToggle() {
  //   if (this.t == 1) {
  //     this.t = 0
  //     return
  //   }
  //   if (this.t == 0) {
  //     this.t = 1
  //     return
  //   }
  // }


  // sendRecommend() {

  //   console.log(this.createform.value);
  //   this.h.InsertRecommenndation(this.createform.value);
  //   this.recToggle();
  //   window.location.reload()
  // }


}
