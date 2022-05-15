import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  compid: any;
  constructor(public dialog: MatDialog,public h :HomeService) { }
id:any


emailform:FormGroup=new FormGroup({
  From: new FormControl(), 


to:new FormControl(), 
  password: new FormControl(), 
  message:new FormControl(),
  subject:new FormControl(),
  user:new FormControl(),
  company:new FormControl(),
})
x:any
  ngOnInit(): void {
  
  this.x=  localStorage.getItem('postids')
   
    this.h.listofonepost(parseInt(this.x));
    const x: any = sessionStorage.getItem('compid');
    this.compid = parseInt(x);

    this.h.company_info(this.compid);

// this.id=sessionStorage.getItem('userid')
// this.h.userbyid(this.id)
  }

send(){
  this.emailform.controls['user'].setValue(this.h.oneuser.fname)

  this.emailform.controls['company'].setValue(this.h.compinfo.compname)
  this.h.emails(this.emailform.value)
}


}
