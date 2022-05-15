import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommentComponent } from '../comment/comment.component';
import { HomeService } from '../services/home.service';
import { PostsComponent } from '../usermodule/posts/posts.component';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})

export class WallComponent implements OnInit {
  @ViewChild('coment') call!: TemplateRef<any>;
id:any
  c: boolean = true
  c2: boolean = true
ud:any
userid:any
  constructor(public h :HomeService,private d:MatDialog,private r :Router) { }
fileredUsersByEdu:any = []
  i: any;
  ngOnInit(): void {
   this.h.getcompany()
   this.h.alluser()
    
    // this.h.usereducation(this.i)


   setTimeout(() => {
     console.log("all");
     console.log(this.h.allusers);

     this.fileredUsersByEdu = this.h.allusers.filter((e: any) => e.edu_level == 'Master')
 
   }, 500);
  
this.id=sessionStorage.getItem('userid')

    this.ud = this.userid = sessionStorage.getItem('userid')
    if (this.ud != null) { this.h.userbyid(parseInt(this.ud)) }
    if (this.userid) {
      this.h.togs = true

    }
    this.id = sessionStorage.getItem('userid')
    this.h.userbyid(parseInt(this.id))

this.h.getpost()
  }
  l(s:any) {
this.h.like(s)
    window.location.reload()
    this.c = false
    this.c2 = true

  }
  l2(s:any) {
    this.h.dlike(s)

    
    this.c2 = false
    this.c = true

  }

comment(x:any){

  sessionStorage.setItem('postid',x)
  this.h.getcomments(x);
console.log(this.h.comments)
this.d.open(CommentComponent)
  // this.r.navigate(['test'])
}

  insercomments(){





  }

  p(id: any) {
    sessionStorage.setItem('i', id);     
    this.r.navigate(['company/user-company']);

  }

  openDialog() {
    const dialogRef = this.d.open(PostsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}
