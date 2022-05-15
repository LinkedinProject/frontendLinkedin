import { Component, Input, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../services/home.service';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { formatDate } from '@angular/common';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})




export class HomeComponent implements OnInit {


  wall() {
this.r.navigate(['wall'])

  }

  userid: any
  myControl = new FormControl();

  filteredOptions: Observable<any> | undefined;


  x2: FormGroup = new FormGroup({
    job_Title: new FormControl()
  }
  )


  searchform: FormGroup = new FormGroup({
    catid: new FormControl(),
    location: new FormControl(),






  })

  img: FormGroup = new FormGroup({
    imageuser: new FormControl(),


  })
  ud: any;
  constructor(public homs: HomeService, private toastr: ToastrService, public v: MatCardModule, private r: Router) { }

  ngOnInit(): void {
   

    this.homs.getWebsite();
    this.homs.getContact();
    this.homs.getabout();
    this.homs.gettstembyid();
    console.log(this.homs.tbyid)
    setTimeout(() => {
      console.log(this.homs.website)
    },500);
    this.homs.getall()
    this.ud = this.userid = sessionStorage.getItem('userid')
    if (this.ud != null) { this.homs.userbyid(parseInt(this.ud)) }
    if (this.userid) {
      this.homs.togs = true

    }

    this.userid = sessionStorage.getItem('userid')


    console.log(this.homs.oneuser)

    this.homs.getcompany()
    this.homs.jobpost()
    if (this.homs.t == 1) {
      this.toastr.success('toster is enable')
    }
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );

  }

  private _filter(value: any): any {

    const filterValue = value.toLowerCase();

    return this.homs.data.filter((option: any) => option.categoryName.toLowerCase().includes(filterValue));
  }

  fun(id: any) {

    localStorage.setItem('idid', id)
    this.r.navigate(['job'])

  }
  image(file: any) {

    if (file.length === 0) {
      return;
    }

    let fileupload = <File>file[0]

    const formdata = new FormData()

    formdata.append('file', fileupload, fileupload.name)

    this.homs.uploadAttachment(formdata)

  }
  x: any = {
    catid: this.searchform.get('catid')


  }
  search() {

    this.searchform.controls['catid'].setValue(parseInt(this.x.catid.value))

    this.homs.flutter(this.searchform.value)
    console.log(this.homs.fluttersss)
  }

  searchfunction() {

    // this.searchform.controls['catid'].setValue()
    this.homs.searchjob(this.x2.value)
    this.r.navigate(['search'])
  }



  edu() {
    this.homs.levelofedue("PHD")
    console.log(this.homs.day)

  }


  enter() {

    // this.date.controls['userid'].setValue(1)
    //     this.homs.datebetween(this.date.value)

    console.log(this.homs.date)

  }
}


