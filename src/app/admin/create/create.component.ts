import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private h: HomeService) { }
  createform: FormGroup = new FormGroup({
    categoryName: new FormControl(),
  })
  ngOnInit(): void {
  }
  cre() {
    console.log(this.createform.value)

    this.h.cretecourse(this.createform.value);
    window.location.reload()

  }
}