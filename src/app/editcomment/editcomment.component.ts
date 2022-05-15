import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-editcomment',
  templateUrl: './editcomment.component.html',
  styleUrls: ['./editcomment.component.css']
})
export class EditcommentComponent implements OnInit {


  ed:FormGroup=new FormGroup({
    com_id :new FormControl(),
  comments:new FormControl(),
  
  }
    
    )
  constructor(public h:HomeService) { }
com_id:any
  ngOnInit(): void {

    this.com_id=sessionStorage.getItem('com_id')
  }
edit(){
  this.ed.controls['com_id'].setValue(parseInt(this.com_id))
  this.h.updatecomment(this.ed.value)
console.log(this.ed.value)

}
}
