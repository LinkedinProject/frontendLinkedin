import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-updateopst',
  templateUrl: './updateopst.component.html',
  styleUrls: ['./updateopst.component.css']
})
export class UpdateopstComponent implements OnInit {


  updatepost: FormGroup = new FormGroup({

    postid: new FormControl(this.h.postid),
    edu_level: new FormControl(),

    post_date: new FormControl((new Date()).toISOString()),
    end_date: new FormControl(),
    salary: new FormControl(),
    location: new FormControl(),
   

    job_ype: new FormControl(),
    onsite_remote: new FormControl(),
  }) 


  constructor(public h :HomeService) { }
id:any
  ngOnInit(): void {

 
 this.id=localStorage.getItem('postid')

  
this.h.postid=this.id
  }
  x: any = {
   
    job_ype: this.updatepost.get('job_ype'),
    onsite_remote: this.updatepost.get('onsite_remote')
  }
up(){
  this.updatepost.controls['job_ype'].setValue((parseInt(this.x.job_ype.value)))
  this.updatepost.controls['onsite_remote'].setValue((parseInt(this.x.onsite_remote.value)))

console.log(this.updatepost.value)
  this.h.updatepostcompany(this.updatepost.value)
}

}
