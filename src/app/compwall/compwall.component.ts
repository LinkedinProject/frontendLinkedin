import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommentComponent } from '../comment/comment.component';
import { CompanydashboardRoutingModule } from '../companydashboard/companydashboard-routing.module';
import { DialogComponent } from '../dialog/dialog.component';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-compwall',
  templateUrl: './compwall.component.html',
  styleUrls: ['./compwall.component.css']
})
export class CompwallComponent implements OnInit {

  constructor(public h :HomeService,private d :MatDialog,private r :Router) { }
compid:any
  fileredUsersByEdu: any = []
  ngOnInit(): void {
this.compid=sessionStorage.getItem('compid')
    this.h.alluser()
    setTimeout(() => {
      console.log("all");
      console.log(this.h.allusers);

      this.fileredUsersByEdu = this.h.allusers.filter((e: any) => e.edu_level == 'Master')

    }, 500);
this.h.company_info(parseInt(this.compid))
    this.h.getpost()
  }
  comment(x: any) {

    sessionStorage.setItem('postid', x)
    this.h.getcomments(x);
    console.log(this.h.comments)
    this.d.open(CommentComponent)
  }


prof(x:any){

  sessionStorage.setItem('i', x);
  // this.h.userbyid(id)
  this.r.navigate(['company/user-company']).then(() => {
    window.location.reload();
  })
}

}
