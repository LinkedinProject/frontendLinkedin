import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { interval, Subscription } from 'rxjs';
import { EmailComponent } from 'src/app/email/email.component';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-userr-company',
  templateUrl: './userr-company.component.html',
  styleUrls: ['./userr-company.component.css']
})
export class UserrCompanyComponent implements OnInit {
  recommendLetter: any;
  createform: FormGroup = new FormGroup({

    recommendLeter: new FormControl(),
    Senderid: new FormControl(parseInt(localStorage.getItem('userid') || '-1')),
    Reseverid: new FormControl(parseInt(sessionStorage.getItem('i') || '-1')),
  })
  i: any;
  t: any = 0;
  compid: any
  userLogid: any = localStorage.getItem('userid');
  constructor(public h: HomeService, private dialog: MatDialog) { }
  msg: any = ''
  ngOnInit(): void {
    this.compid = sessionStorage.getItem('compid')
    this.h.recommendations = []

    this.dialog.closeAll();

    this.i = sessionStorage.getItem('i')
    this.h.GetRecommenndationResever(this.i)

    this.recommendLetter = this.h.recommendations.length
    this.h.userbyid(this.i)
    this.h.usereducation(this.i)



    this.h.GetUserProjects(this.i)
    console.log("...." + this.userLogid);
    this.h.getExp(this.i);

    setTimeout(() => {
      this.recommendLetter = this.h.recommendations.length

      this.msg = " Nothing to see for now Recommendations that " + this.h.oneuser.fname
        + " " + this.h.oneuser.lname + " receives will appear here."
    }, 1500);
  }

  GetRecommenndationResever() {
    this.h.GetRecommenndationResever(this.i)
    this.recommendLetter = this.h.recommendations.length
    setTimeout(() => {
      this.recommendLetter = this.h.recommendations.length


      console.log(this.h.recommendations);

    }, 2000);
  }

  GetRecommenndationSender() {
    this.h.GetRecommenndationSender(this.i)
    this.recommendLetter = this.h.recommendations.length
    setTimeout(() => {
      this.recommendLetter = this.h.recommendations.length


      console.log(this.h.recommendations);
    }, 2000);
  }

  recToggle() {
    if (this.t == 1) {
      this.t = 0
      return
    }
    if (this.t == 0) {
      this.t = 1
      return
    }
  }


  sendRecommend() {

    console.log(this.createform.value);
    this.h.InsertRecommenndation(this.createform.value);
    this.recToggle();
    window.location.reload()
  }

  email() {
    this.dialog.open(EmailComponent);
  }
}
