import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
ud:any
userid:any
  constructor(public h :HomeService) { }

  ngOnInit(): void {
    this.h.getWebsite();
    this.h.getContact();
    this.h.getabout();

    this.ud = this.userid = sessionStorage.getItem('userid')
    if (this.ud != null) { this.h.userbyid(parseInt(this.ud)) }
    if (this.userid) {
      this.h.togs = true

    }

    setTimeout(() => {
      console.log( this.h.about)
    }, 555);

    
  }
}
