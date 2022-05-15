import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-descjob',
  templateUrl: './descjob.component.html',
  styleUrls: ['./descjob.component.css']
})
export class DescjobComponent implements OnInit {

form1:FormGroup=new FormGroup({
  Jobid: new FormControl(),
userid:new FormControl(),
  APPLICANTNAME: new FormControl(),
  APPLICANTEMAIL: new FormControl(),
  uploadcv: new FormControl(),

  COVERLETTER: new FormControl(),

})

ud:any
  constructor(public h :HomeService,private r:Router,private ss :NgxSpinnerService) { }
postid:any
userid :any=0
company_name:any
  ngOnInit(): void {
    this.h.getall()


    this.ud = this.userid = sessionStorage.getItem('userid')
    if (this.ud != null) { this.h.userbyid(parseInt(this.ud)) }
    if (this.userid) {
      this.h.togs = true

    }

    this.h.jobpost();
   this.postid=localStorage.getItem('postid')

    this.h.getpstbyidx(this.postid)
console.log(this.postid)
this.userid=sessionStorage.getItem('userid')
    this.company_name = sessionStorage.getItem('compayid')


  }
   today = (new Date()).toISOString();
 apply(){


this.form1.controls['Jobid'].setValue(parseInt(this.postid))
   this.form1.controls['userid'].setValue(parseInt(this.userid))
 console.log(this.form1.value)

 this.h.userapply(this.form1.value)
   this.r.navigate(['user/applied']).then(() => {
     window.location.reload();
   });;
// let obj:any={

//   Jobid:parseInt(this.postid),
//    userid: parseInt(this.userid),
//   APPLICANTNAME:this.a,
//   company_name:this.company_name
  

//  }
 
  //  let today = (new Date()).toISOString();
  //   console.log(this.userid)
  //   console.log(this.company_name)
  //   console.log(today)

console.log(this.today)


  }

  cv(file: any) {

    if (file.length === 0) {
      return;
    }

    let fileupload = <File>file[0]

    const formdata = new FormData()

    formdata.append('file', fileupload, fileupload.name)

    this.h.uploadAttachment2(formdata)

  }

s(id :any){
this.ss.show()
 this.h. company_info(id)
  this.ss.hide()

this.r.navigate(['company/account'])

}
}
