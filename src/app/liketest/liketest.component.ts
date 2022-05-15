import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-liketest',
  templateUrl: './liketest.component.html',
  styleUrls: ['./liketest.component.css']
})
export class LiketestComponent implements OnInit {
  @ViewChild('r') callUpdateDailog!: TemplateRef<any>;
x:number=0
c:boolean=true
  c2: boolean = true

  constructor() { }
like:any='like'
  ulike: any = 'remove like'

  ngOnInit(): void {
  }

l(){

++this.x
this.c=false
 this.like= 'liked'
  this.c2 = true

}
l2(){

  --this.x
  this.c2 = false
  this.like = 'liked'
  this.c = true

}
}
