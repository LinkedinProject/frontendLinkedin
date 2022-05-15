import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nanav-dashboard-admin',
  templateUrl: './nanav-dashboard-admin.component.html',
  styleUrls: ['./nanav-dashboard-admin.component.css']
})
export class NanavDashboardAdminComponent implements OnInit {

  constructor(private r :Router) { }


  clears() {
    this.r.navigate(['user/login'])
  }
  ngOnInit(): void {
  }

}
