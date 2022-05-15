import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-f',
  templateUrl: './f.component.html',
  styleUrls: ['./f.component.css']
})
export class FComponent implements OnInit {

  constructor(public h: HomeService) { }

  ngOnInit(): void {
    this.h.getWebsite();
    this.h.getContact();
    this.h.getabout();
  }

}
