import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, Observable, startWith } from 'rxjs';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  userid:any
  myControl = new FormControl();
 
  filteredOptions: Observable<any> |undefined;


x2:FormGroup=new FormGroup({
job_Title : new FormControl()
}
)
 

  searchform: FormGroup = new FormGroup({
    catid: new FormControl(),
    location: new FormControl(),






  })

    img :FormGroup= new FormGroup({
imageuser:new FormControl(),


    })

  constructor(public homs:HomeService,private toastr:ToastrService,public v :MatCardModule,private r :Router) { }
 
  ngOnInit(): void { 
    this.homs.gettotaljob()
  
    this.userid=sessionStorage.getItem('userid')


   console.log(this.homs.oneuser)
    this.homs.getall()
     this.homs.getcompany()
    this.homs.jobpost()
   if(this.homs.t==1){
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

 fun(id :any){

localStorage.setItem('idid',id)
   this.r.navigate(['job'])

 } 
 image(file:any){

if(file.length===0){
  return ;
}

let fileupload=<File>file[0]

const formdata=new FormData()

   formdata.append('file',fileupload,fileupload.name)

   this.homs.uploadAttachment(formdata)

 }
x:any={
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


  enter(){

// this.date.controls['userid'].setValue(1)
//     this.homs.datebetween(this.date.value)

console.log(this.homs.date)

  }
}


