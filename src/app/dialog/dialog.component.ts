import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  postform: FormGroup = new FormGroup({
    job_title: new FormControl(),
    description: new FormControl(),

    edu_level: new FormControl(),

    post_date: new FormControl(),

    end_date: new FormControl(),
    salary: new FormControl(),
    location: new FormControl(),
    compid: new FormControl(),
    catid: new FormControl(),
  });
  //////////////////////
  dateForm: FormGroup = new FormGroup({
    date1: new FormControl(),
    date2: new FormControl(),
    job_id: new FormControl(localStorage.getItem('postApply')),
  });

  betweendate2() {
    let obg: any = {
      job_id: parseInt(this.dateForm.controls['job_id'].value),
      date1: this.dateForm.controls['date1'].value,
      date2: this.dateForm.controls['date2'].value,
    };
    this.h.listofonepostbetweendate(obg);


  }
  ///////////////////////
  submit() {
    this.postform.controls['compid'].setValue(this.compid);

    this.h.createpost(this.postform.value);
  }

  compid: any;
  constructor(
    public h: HomeService,
    public dialog: MatDialog,
    public r: Router
  ) {}
  ngOnInit(): void {
























    
    // const x: any = sessionStorage.getItem('compid')
    // this.compid = parseInt(x)
    // this.h.companypost(this.compid)
    // this.h.company_info(this.compid)
    // this.h.getAll();
  }

  xr(postid: any) {
    this.h.listofonepost(postid);
  }

  cc() {
    console.log(this.h.allcompanypost);
  }

  date(postid: any) {
    let obg: any = {
      job_id: postid,
      date1: '2022-04-02',
      date2: '2022-04-02',
    };
    this.h.listofonepostbetweendate(obg.value);
  }
  accept(id: any) {
    this.h.updatestatustoaccept(id);
    window.location.reload()

  }

  reject(id: any) {
    console.log(id)
    this.h.updatestatustoregect(id);
    window.location.reload()
  }
  p(id: any) {
    sessionStorage.setItem('i', id);
    // this.h.userbyid(id)
    this.r.navigate(['company/user-company']);

  }
  prof(id: any) {
    sessionStorage.setItem('i', id);
    // this.h.userbyid(id)
    this.r.navigate(['company/user-company']);
  }
}
