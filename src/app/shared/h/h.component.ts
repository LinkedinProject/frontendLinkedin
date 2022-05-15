import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeService } from 'src/app/services/home.service';
import { PostsComponent } from 'src/app/usermodule/posts/posts.component';

@Component({
  selector: 'app-h',
  templateUrl: './h.component.html',
  styleUrls: ['./h.component.css']
})
export class HComponent implements OnInit {
  constructor( private r :Router,public h:HomeService,private d:MatDialog,private s:NgxSpinnerService) { }
 hidden = false;
 xe:any
  ngOnInit(): void {


   this.h.gettotaljob()

   
let x=localStorage.getItem('user')
console.log(x)
  }
    toggleBadgeVisibility() {
      this.hidden = !this.hidden;
    }

clears(){
sessionStorage.removeItem('userid')
  this.r.navigate([''])
}

  openDialog() {
    const dialogRef = this.d.open(PostsComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }


sp(){
  this.s.show();
  
  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.s.hide();
  }, 1500);
  
}


}
