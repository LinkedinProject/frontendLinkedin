import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-choise',
  templateUrl: './choise.component.html',
  styleUrls: ['./choise.component.css']
})
export class ChoiseComponent implements OnInit {




  form: FormGroup = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    gpa: new FormControl('', [Validators.required]),
    univercity: new FormControl('', [Validators.required]),
    major: new FormControl((new Date()).toISOString()),
    dategrade: new FormControl('', [Validators.required]),
    degree: new FormControl('', [Validators.required, Validators.minLength(10)]),
    userid: new FormControl('',),
  

  })


email:any
pass:any
  constructor(public h :HomeService) { }

  ngOnInit(): void {

this.email=localStorage.getItem('email')
  this.pass=  localStorage.getItem('pass')



  }
ss(){

  this.h.getid(this.email.toString(), this.pass.toString())

  console.log(this.email)
  console.log(this.pass)

}
}
