import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-companyregister',
  templateUrl: './companyregister.component.html',
  styleUrls: ['./companyregister.component.css']
})
export class CompanyregisterComponent implements OnInit {
  constructor(private h: HomeService,private r :Router) { }

  /*

    form: FormGroup = new FormGroup({
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
      gender: new FormControl('', [Validators.required]),
      birthdate: new FormControl('', [Validators.required]),
      imageuser: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      roleid: new FormControl(1, [Validators.required]),

      pass: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmpassword: new FormControl('', [Validators.required, Validators.minLength(8)]),

      edu_level: new FormControl('', [Validators.required]),

    })


  */


  form: FormGroup = new FormGroup({
    compname: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    specialties: new FormControl('', [Validators.required]),
    registereddate: new FormControl((new Date()).toISOString()),
    website_url: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    logo: new FormControl('', [Validators.required]),
    descreption: new FormControl('', [Validators.required]),
    roleid: new FormControl(2),
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmpassword: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  onChange() {
    if (this.form.controls['pass'].value == this.form.controls['confirmpassword'].value)
      this.form.controls['confirmpassword'].setErrors(null);
    else

      this.form.controls['confirmpassword'].setErrors({ mismatch: true });
  }



  s() {

    this.h.createcompany(this.form.value)
this.r.navigate(['user/login'])
  }

  image(file: any) {

    if (file.length === 0) {
      return;
    }

    let fileupload = <File>file[0]

    const formdata = new FormData()

    formdata.append('file', fileupload, fileupload.name)

    this.h.uploadcompanyimg(formdata)

  }
  ngOnInit(): void {
  }

}