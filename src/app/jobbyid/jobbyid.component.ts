import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { HomeService } from '../services/home.service';
// import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-jobbyid',
  templateUrl: './jobbyid.component.html',
  styleUrls: ['./jobbyid.component.css']
})
export class JobbyidComponent implements OnInit {

  constructor(public h :HomeService ,private r :Router, private spinner:NgxSpinnerService) { }

  f(id: any) {
  
localStorage.setItem('postid',id)
      // this.h.getpstbyidx(id)
    this.r.navigate(['desc'])
  }
userid:any
ud:any
  x:any
  ngOnInit(): void {
this.x=localStorage.getItem('idid')
this.h.getjobbyid(this.x)



    this.ud = this.userid = sessionStorage.getItem('userid')
    if (this.ud != null) { this.h.userbyid(parseInt(this.ud)) }
    if (this.userid) {
      this.h.togs = true

    }


  }
  getJobType(e: any) {
    this.spinner.show();
    this.h.getJobByTypeCategory(e.target.value, this.x)
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1500);

  }
  getJobOnsite_Remote(e: any) {
    this.spinner.show();
    this.h.getJobOnsiteRemoteCategory(e.target.value, this.x)
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1500);

  }
  edu() {
    this.h.levelofedue("PHD")
    console.log(this.h.day)

  }
  x2: FormGroup = new FormGroup({
    job_Title: new FormControl()
  }
  )

  searchfunction() {
    this.spinner.show();
    // this.searchform.controls['catid'].setValue()
    this.h.searchjob(this.x2.value)
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1500);
  }

}
function postid2(postid2: any, id: any) {
  throw new Error('Function not implemented.');
}

