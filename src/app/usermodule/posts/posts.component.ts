import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

post:FormGroup=new FormGroup({

fname: new FormControl(this.homs.oneuser.fname),
  datepost: new FormControl((new Date()).toISOString()),
  img: new FormControl(this.homs.oneuser.imageuser),
  describ: new FormControl(),
  userid: new FormControl(this.homs.oneuser.userid),


})

id:any

  constructor( private d:MatDialog,public homs:HomeService ) { }

  ngOnInit(): void {
this.id=sessionStorage.getItem('userid')
this.homs.userbyid(parseInt(this.id))


  }


puplish(){
this.homs.post(this.post.value)
console.log(this.post.value)
  window.location.reload()

}
}
