import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit {
 
  @Input() job_Title: string | undefined
  @Input() salary: number | undefined
  @Input() ids: number | undefined
  @ViewChild('callupjob') callupjob!: TemplateRef<any>
  @Input() location: string | undefined
  
  constructor(public h:HomeService,private r :Router,private o:MatDialog,private spinner:NgxSpinnerService) { }




  searchform2: FormGroup = new FormGroup({
    catid: new FormControl(),
    location: new FormControl(),


  })


  x: any = {
    catid: this.searchform2.get('catid')


  }
  search() {

    this.searchform2.controls['catid'].setValue(parseInt(this.x.catid.value))

    this.h.flutter(this.searchform2.value)
    console.log(this.h.fluttersss)
  }


ud:any
userid:any
id:any
  ngOnInit(): void {


    this.ud = this.userid = sessionStorage.getItem('userid')
    if (this.ud != null) { this.h.userbyid(parseInt(this.ud)) }
    if (this.userid) {
      this.h.togs = true

    }






    this.h.jobpost()
    console.log(this.h.togs)
this.h.getall()
  }
  obj4:any={


  }

obg5:any




  description(x:any){
this.obg5={

  job_Title:x.job_Title
}

    localStorage.setItem('postid',x.postid)
    // sessionStorage.setItem('compayid', x.job_Title)

    // this.h.getpstbyidx(postid)

this.r.navigate(['desc'])
  }

  updatejobs: FormGroup = new FormGroup({

    postid: new FormControl(),
    job_Title: new FormControl(),
    description: new FormControl(),

    salary: new FormControl(),



  })
  searchform: FormGroup = new FormGroup({
    catid: new FormControl(),
    location: new FormControl(),


  })



  updatejob(postid: any, job_Title: any, description: any, salary:any){

this.obj4={

  postid: postid,
  job_Title: job_Title,
  description: description,
  salary: salary
    }
    this.updatejobs.controls['postid'].setValue(postid)
  this.o.open(this.callupjob)

  }

  edu(e:any) {
    this.h.levelofedue(e)
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
  }
updates(){
  this.h.update4(this.updatejobs.value)
}
  getJobType(e: any) {
    this.h.getJobByType(e.target.value)
  }
  getJobOnsite_Remote(e: any) 
  {
    this.h.getJobOnsiteRemote(e.target.value)
  }
  getByLvl(e: any) {
    this.edu(e.target.value)
  

  }

}
