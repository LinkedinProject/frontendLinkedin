import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @ViewChild('callupdate') callupdate!:TemplateRef<any>
  @ViewChild('callupdate2') callupdate2!: TemplateRef<any>

  @Input() fname :string |undefined
  @Input() lname: string | undefined

  @Input() email: string | undefined

  constructor(public h :HomeService,private r :Router,private o:MatDialog) { }
 obj :any={}
  obj2: any = {}

  ngOnInit(): void {
    this.h.dtOptions = {

      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        'columnsToggle',
        'colvis',
        'copy',
        'print',
        'excel',
        'csv',
        'pdf',
        {
          text: 'Some button',
          key: '1',
          action: function (e: any, dt: any, node: any, config: any) {
            alert('Button activated');
          }
        }
      ]
    };



    this.h.alluser();
    this.h.getall();

  }







  updateuser: FormGroup = new FormGroup({
    userid: new FormControl(),
    fname: new FormControl(),
    lname: new FormControl(),
    email: new FormControl(),


  })
 



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
}