import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  compid: any;
  constructor(
    public h: HomeService,
    public dialog: MatDialog,
    private r: Router
  ) {}
  ngOnInit(): void {
    const x: any = sessionStorage.getItem('compid');
    this.compid = parseInt(x);
    this.h.companypost(this.compid);

    this.h.company_info(this.compid);
    console.log(this.h.compinfo);
    // this.h.getAll();
  }

}
