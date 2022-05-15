import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { UpdateuserComponent } from '../updateuser/updateuser.component';

@Component({
  selector: 'app-usersregisted',
  templateUrl: './usersregisted.component.html',
  styleUrls: ['./usersregisted.component.css']
})
export class UsersregistedComponent implements OnInit {
  @ViewChild('callupdate') callupdate!:TemplateRef<any>
  @ViewChild('callupdate2') callupdate2!: TemplateRef<any>

  @Input() fname :string |undefined
  @Input() lname: string | undefined

  @Input() email: string | undefined

  constructor(public h :HomeService,private r :Router,private o:MatDialog) { }
 obj :any={}
  obj2: any = {}

  ngOnInit(): void {

    this.h.alluser();
    this.h.getall();

  }

  update: FormGroup = new FormGroup({
    categoryId: new FormControl(),
    categoryName: new FormControl()
  })







  updateuser: FormGroup = new FormGroup({
    userid: new FormControl(),
    fname: new FormControl(),
    lname: new FormControl(),
    email: new FormControl(),


  })
 

  opendialog(categoryId :any, categoryName:any){
console.log(categoryId)
this.obj={
  categoryId: categoryId,
  categoryName: categoryName
}
    this.update.controls['categoryId'].setValue(categoryId)
    this.o.open(this.callupdate)
  }
updatecat(){
  this.h.update(this.update.value)
}


  opendialog2(userid: any, fname: any, lname: any, email: any) {

    this.obj2 = {

      userid: userid,
      fname: fname,
      lname: lname,
      email: email


    }
    this.updateuser.controls['userid'].setValue(userid)
    this.o.open(this.callupdate2)

  }
  up2() {

    this.h.update2(this.updateuser.value)
  }
  toggle:boolean=true
  
    getcmpany(){
  
      this.r.navigate(['admin/company'])
  
    }
    allusers(){
  
      this.r.navigate(['admin/usersregisted'])
  
    }
  
    
    userprofile(){
  
      this.r.navigate(['admin/profileuser'])
  
    }
    manageabout(){
      this.r.navigate(['admin/manageabout'])
    }
  
  tog(){
  this.toggle=false
    this.r.navigate(['admin/m'])
  }
  dashboard(){
    this.r.navigate(['admin/dashboard'])
  }
}
