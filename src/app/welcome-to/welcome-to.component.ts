import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-welcome-to',
  templateUrl: './welcome-to.component.html',
  styleUrls: ['./welcome-to.component.css']
})
export class WelcomeToComponent implements OnInit {

  constructor(private r: Router, private to: ToastrService) { }

  ngOnInit(): void {
  }

  GoTocomp() {
    this.r.navigate(['company/company-r'])
  }
  GoToUser() {
    this.r.navigate(['user/register'])
  }
}