import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @ViewChild('callupdate') callupdate!: TemplateRef<any>
  @ViewChild('callupdate2') callupdate2!: TemplateRef<any>

  @Input() fname: string | undefined
  @Input() lname: string | undefined

  @Input() email: string | undefined

  constructor(public h: HomeService, private r: Router, private o: MatDialog) { }
  obj: any = {}
  obj2: any = {}

  ngOnInit(): void {

    this.h.alluser();
    this.h.getall();


  }

  update: FormGroup = new FormGroup({
    categoryId: new FormControl(),
    categoryName: new FormControl()
  })


  y() {

    this.o.open(CreateComponent)
  }
  yx() {

    // this.o.open(CreatecompanyjobComponent)
  }



  toggle: boolean = true

  getcmpany() {

    this.r.navigate(['admin/company'])

  }
  allusers() {

    this.r.navigate(['admin/usersregisted'])

  }


  userprofile() {

    this.r.navigate(['admin/profileuser'])

  }
  manageabout() {
    this.r.navigate(['admin/manageabout'])
  }

  tog() {
    this.toggle = false
    this.r.navigate(['admin/m'])
  }
  opendialog(categoryId: any, categoryName: any) {
    console.log(categoryId)
    this.obj = {
      categoryId: categoryId,
      categoryName: categoryName
    }
    this.update.controls['categoryId'].setValue(categoryId)
    this.o.open(this.callupdate)
  }
  updatecat() {
    this.h.update(this.update.value)
  }
  dashboard() {
    this.r.navigate(['admin/ctrl'])
  }
}