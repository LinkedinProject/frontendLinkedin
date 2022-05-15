import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-editedu',
  templateUrl: './editedu.component.html',
  styleUrls: ['./editedu.component.css']
})
export class EditeduComponent implements OnInit {

id :any

  form: FormGroup = new FormGroup({
  
    gpa: new FormControl('', [Validators.required]),
    UNIVERCITY: new FormControl('', [Validators.required]),
    major: new FormControl(),
   
    DATEGRADE: new FormControl(),
    CERTIFICATE: new FormControl(),
    DEGREE: new FormControl('', [Validators.required]),
    ACHIVEMENT: new FormControl(),
    userid: new FormControl(),
  
  })


  // "Jobtitle": "njnj",
  // "describtion": "fefe",
  // "Companyname": "fefe",
  // "Datefrom": "2019-07-04",
  // "Dateto": "2019-07-04",


  // "Userid": 1
  expForm: FormGroup = new FormGroup({

    Jobtitle: new FormControl('', [Validators.required]),
    Companyname: new FormControl('', [Validators.required]),
    Datefrom: new FormControl(),

    Dateto: new FormControl(),
    describtion: new FormControl(),
  
    Userid: new FormControl( ),

  })

  constructor(private r:Router,public h:HomeService) { }
  toggle:boolean=true
  ngOnInit(): void {
    
   this.id= sessionStorage.getItem('userid')
this.h.userbyid(parseInt(this.id))

  }
  clears(){
    localStorage.clear()
      this.r.navigate(['loginuser'])
    }


fills(){
this.form.controls['userid'].setValue(parseInt(this.id))
    this.h.fill(this.form.value)

}


  insertExp(){
    this.expForm.controls['Userid'].setValue(parseInt(this.id))
    console.log(this.expForm.value);


    
  }
}

