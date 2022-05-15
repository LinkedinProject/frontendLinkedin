import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  updateWeb: FormGroup = new FormGroup({

    websiteid: new FormControl(1),
    website_Title: new FormControl(),

    logoheader: new FormControl(),
    logofooter: new FormControl(),
    heroimg1: new FormControl(),
    heroimg: new FormControl(),

  })

  updateContact: FormGroup = new FormGroup({

    contact_Id: new FormControl(1),
    phone: new FormControl(),
    email: new FormControl(),
    websiteid: new FormControl(1)
  })

  updateAbout: FormGroup = new FormGroup({

    about_Id: new FormControl(1),
    des1: new FormControl(),
    img1: new FormControl(),
    des2: new FormControl(),
    img2: new FormControl(),
    websiteid: new FormControl(1)
  })

  toggle2: any = 0
  toggle3: any = 0
  toggle4: any = 0


  toggles1() {
    console.log('....');

    if (this.toggle2 == 0) {
      console.log('0');

      this.toggle2 = 1;
      return
    }

    if (this.toggle2 == 1) {
      this.h.updateWebsite(this.updateWeb.value)
      this.toggle2 = 0;
      return
    }
    console.log('1');

  }

  toggles2() {
    console.log('....');

    if (this.toggle3 == 0) {
      console.log('0');

      this.toggle3 = 1;
      return
    }

    if (this.toggle3 == 1) {
      console.log(this.updateContact.value);

      this.h.UpdateContact(this.updateContact.value)
      this.toggle3 = 0;
      return
    }
    console.log('1');

  }



  toggles3() {
    console.log('....');

    if (this.toggle4 == 0) {
      console.log('0');

      this.toggle4 = 1;
      return
    }

    if (this.toggle4 == 1) {
      console.log(this.updateContact.value);

      this.h.updateAbout(this.updateAbout.value)
      this.toggle4 = 0;
      return
    }
    console.log('1');

  }
  constructor(private r: Router,public h :HomeService) { }
  toggle: boolean = true

  getcmpany() {

    this.r.navigate(['admin/company'])

  }
  allusers() {

    this.r.navigate(['admin/usersregisted'])

  }


  userprofile() {

    this.r.navigate(['admin/profileuser'])

  }
  manageabout() {
    this.r.navigate(['admin/manageabout'])
  }

  tog() {
    this.toggle = false
    this.r.navigate(['admin/cat'])
  }
  dashboard() {
    this.r.navigate(['admin/dashboard'])
  }
  ngOnInit(): void {

    this.h.getWebsite()
    this.h.getContact()
    this.h.getabout();


  }
}