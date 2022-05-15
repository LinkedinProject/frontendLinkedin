import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-createcompanyjob',
  templateUrl: './createcompanyjob.component.html',
  styleUrls: ['./createcompanyjob.component.css']
})
export class CreatecompanyjobComponent implements OnInit {
  c:FormGroup=  new FormGroup({})
  categoryName = new FormControl();
  description = new FormControl();
  edu_Level = new FormControl();

  post_Date = new FormControl();

  end_Date = new FormControl();
  salary = new FormControl();

  location = new FormControl();

  compid = new FormControl();
  catid = new FormControl();



  constructor(public h:HomeService) { }

  ngOnInit(): void {
  }
  cc() {

    this.h.cretecourse(this.categoryName.value.toString())
    console.log(this.categoryName.value)
  }
}
