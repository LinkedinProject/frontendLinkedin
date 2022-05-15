import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
ud:any
userid:any
  constructor(public h:HomeService) { }


  con: FormGroup = new FormGroup({

    fname: new FormControl(),
    email: new FormControl(),
    subject: new FormControl(),
    message: new FormControl(),
  


  })
t(){

  this.h.insertcontact(this.con.value)
}

  ngOnInit(): void {
    this.h.getWebsite();
    this.h.getContact();
    this.h.getabout();
    this.ud = this.userid = sessionStorage.getItem('userid')
    if (this.ud != null) { this.h.userbyid(parseInt(this.ud)) }
    if (this.userid) {
      this.h.togs = true

    }
  }

}
