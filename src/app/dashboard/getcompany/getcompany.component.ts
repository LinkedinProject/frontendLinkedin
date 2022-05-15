import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-getcompany',
  templateUrl: './getcompany.component.html',
  styleUrls: ['./getcompany.component.css']
})
export class GetcompanyComponent implements OnInit {

  @Input() compname :string |undefined 
  @Input() location: string | undefined 
  @ViewChild('callupcompany') callupcompany!: TemplateRef<any>

  
  obj3:any={


  }
  constructor(public h: HomeService, private r: Router,private o: MatDialog) { }

  ngOnInit(): void {
    this.h.getcompany();
  }
  descrption(x :any){
   this.h.comapny={
     l: x.location,
     specialties: x.specialties,
     descreption: x.descreption,
     regDate: x.regDate,
     phone: x.phone,
     website_Url: x.website_Url,
     compid:x.compid
   }
    this.r.navigate(['admin/companydetails'])
  }

  updatecompany: FormGroup = new FormGroup({
  
      compid: new FormControl(),
    compname: new FormControl(), 
    location: new FormControl(),

    descreption: new FormControl(),
    


  })

  upup(copmid: any, compname: any, location: any, descreption:any){
this.obj3={

  copmid:copmid,
  compname: compname,
  location: location,
  descreption: descreption
}
   
    this.updatecompany.controls['compid'].setValue(copmid)


   this.o.open(this.callupcompany)
  }

  xx(){
    alert('dgdrtgh')
  }
  upcomp(){
    this.h.update3(this.updatecompany.value)




}


toggle:boolean=true
  
getcmpany(){

  this.r.navigate(['admin/company'])

}
allusers(){

  this.r.navigate(['admin/usersregisted'])

}


userprofile(){

  this.r.navigate(['admin/profileuser'])

}
manageabout(){
  this.r.navigate(['admin/manageabout'])
}

tog(){
this.toggle=false
this.r.navigate(['admin/m'])
}
dashboard(){
this.r.navigate(['admin/dashboard'])
}
  
}
