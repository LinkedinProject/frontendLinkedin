import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  teste:FormGroup=new FormGroup({
fname:new FormControl(),

   
    email: new FormControl(),
 message: new FormControl(),
    stutus: new FormControl(),
    userid: new FormControl(),

    img: new FormControl(),
    rete: new FormControl(4),

    stu: new FormControl(),

  })

  constructor(public h:HomeService) {
   

    
  }
 
f(){

 this.teste.controls['userid'].setValue(parseInt(this.id))
  this.teste.controls['stu'].setValue(1)
  this.teste.controls['img'].setValue(this.h.oneuser.imageuser)
  this.h.inserttestem(this.teste.value)
}
ud:any
userid:any
id: any
  ngOnInit(): void {
  

    this.ud = this.userid = sessionStorage.getItem('userid')
    if (this.ud != null) { this.h.userbyid(parseInt(this.ud)) }
    if (this.userid) {
      this.h.togs = true

    }


this.id=sessionStorage.getItem('userid')
    this.h.ts(parseInt(this.id)) 
    this.h.userbyid(parseInt(this.id)) 
  }

d(){

 
  console.log(this.h.stu)
console.log(this.id)
}


 
}
