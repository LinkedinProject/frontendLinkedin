import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  nrSelect: string = "47"

  edulevel: any = 'edu_level_';
  f = new FormControl('', [Validators.required])
  l = new FormControl('', [Validators.required])
  p = new FormControl('', [Validators.required])

  constructor(private h: HomeService, private r: Router) { }
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
  email: any
  pass: any
  x: any
  s() {
    this.email = this.form.controls['email'].value
    this.pass = this.form.controls['pass'].value

    localStorage.setItem('email', this.email)
    localStorage.setItem('pass', this.pass)

    this.h.createuser(this.form.value)

    this.r.navigate(['user/login'])
  }
  onChange() {
    if (this.form.controls['pass'].value == this.form.controls['confirmpassword'].value)
      this.form.controls['confirmpassword'].setErrors(null);
    else

      this.form.controls['confirmpassword'].setErrors({ mismatch: true });
  }
  image(file: any) {

    if (file.length === 0) {
      return;
    }

    let fileupload = <File>file[0]

    const formdata = new FormData()

    formdata.append('file', fileupload, fileupload.name)

    this.h.uploadAttachment(formdata)

  }
  ngOnInit(): void {
    this.nrSelect = "47"

  }

}
