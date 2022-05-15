import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeService } from 'src/app/services/home.service';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-dailogpost',
  templateUrl: './dailogpost.component.html',
  styleUrls: ['./dailogpost.component.css']
})
export class DailogpostComponent implements OnInit {

  compid: any;
  constructor(public h :HomeService) { }
createform :FormGroup=new FormGroup({
  
  job_title: new FormControl(),
  description: new FormControl(),

  edu_level: new FormControl(),

  post_date: new FormControl((new Date()).toISOString()),
  end_date: new FormControl(),
  salary: new FormControl(),
  location: new FormControl(),
  compid: new FormControl(),
  catid: new FormControl(),

  job_ype: new FormControl(),
  onsite_remote: new FormControl(),
}) 
date :any =(new Date()).toISOString()
  ngOnInit(): void {
  this.h.getall()

  

console.log(this.h.date)
    const x: any = sessionStorage.getItem('compid')
    this.compid = parseInt(x)
    this.h.companypost(this.compid)

    this.h.company_info(this.compid)
    console.log(this.h.compinfo)

  }

  x: any = {
    catid: this.createform.get('catid'),
    job_ype: this.createform.get('job_ype'),
    onsite_remote: this.createform.get('onsite_remote')
  }
 
 

  

cre(){
 console.log(this.h.data)
  this.createform.controls['compid'].setValue(this.compid)
  this.createform.controls['catid'].setValue((parseInt(this.x.catid.value)))
  this.createform.controls['job_ype'].setValue((parseInt(this.x.job_ype.value)))
  this.createform.controls['onsite_remote'].setValue((parseInt(this.x.onsite_remote.value)))

  this.h.createpost(this.createform.value);
  window.location.reload();

 console.log(this.createform.value)
}
}
