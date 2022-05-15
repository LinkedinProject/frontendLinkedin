import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  constructor(private r: Router,public homs :HomeService) { }

form:FormGroup=new FormGroup({
  userid: new FormControl(),

  fname: new FormControl('', [Validators.required]),
  lname: new FormControl('', [Validators.required]),
  phone: new FormControl('', [Validators.required]),
  address: new FormControl('', [Validators.required]),
  imageuser: new FormControl(),

})

  // "Jobtitle": "njnj",
  // "describtion": "fefe",
  // "Companyname": "fefe",
  // "Datefrom": "2019-07-04",
  // "Dateto": "2019-07-04",

   expForm: FormGroup = new FormGroup({

    Jobtitle: new FormControl('', [Validators.required]),
    Companyname: new FormControl('', [Validators.required]),
    Datefrom: new FormControl(),

    Dateto: new FormControl(),
    describtion: new FormControl(),

    Userid: new FormControl(),

  })
// UerId Startdate Enddate ProDescription PROLINK proTitle
  projectForm: FormGroup = new FormGroup({

    proTitle: new FormControl( ),
    Startdate: new FormControl( ),
    Enddate: new FormControl(),

    ProDescription: new FormControl(),
    PROLINK: new FormControl(),

    UerId: new FormControl(),

  })

  form2: FormGroup = new FormGroup({

    univercity: new FormControl('', [Validators.required]),
    major: new FormControl('', [Validators.required]),
    dategrade: new FormControl('', [Validators.required]),
    degree: new FormControl('', [Validators.required]),
    userid: new FormControl(),

  })
upim:FormGroup=new FormGroup({

  userid: new FormControl(147),
  Imageuser: new FormControl(),


})
id:any
id2:any
xxx:any
  ngOnInit(): void {
  

    this.id = sessionStorage.getItem('userid')
    this.homs.userbyid(parseInt(this.id)) 


  this.id2= sessionStorage.getItem('userid')
  this.homs.userbyid(parseInt(this.id2))
  this.homs.getaEducatinal(this.id2);

    if (!this.homs.userEdu.major){
      console.log("!this.homs.userEdu");
      
      this.homs.userEdu ={
        "univercity": "x",
        "major": "x",
        "dategrade": "x",
        "degree": "x",
        "userid": this.id2,
      }

    console.log( this.homs.userEdu)
    }else{
      console.log("!this.homs.userEdu..");

      console.log(!this.homs.userEdu.major);

    }
  }
 


fills(){
  this.form2.controls['userid'].setValue(parseInt(this.id2))
  console.log(this.id2);

  this.homs.getaEducatinal(this.id2);

  setTimeout(() => {
    console.log('...');

    console.log(this.homs.userEdu);
    console.log('.....');

    if (this.homs.userEdu) {
      console.log('Update');
      this.homs.updateEducatinal(this.form2.value);
    } else {
      console.log('Insert');
      this.homs.fill(this.form2.value)

    }

  }, 1000);



}
f(){

  console.log(this.homs.userdue)
}
  save(){
    this.form.controls['userid'].setValue(parseInt(this.id))
    this.homs.updateuser(this.form.value)
console.log(this.form.value)

  }
  clears(){
    localStorage.clear()
    sessionStorage.removeItem('userid')
      this.r.navigate(['user/login'])
    }



changeimg(){
this.homs.updatimage(this.upim.value)

}
  insertExp() {
    this.expForm.controls['Userid'].setValue(parseInt(this.id))
    console.log(this.expForm.value);

    this.homs.insertExp(this.expForm.value)

  }

  insertPro() {
    
    this.projectForm.controls['UerId'].setValue(parseInt(this.id))
    console.log(this.projectForm.value);

    this.homs.insertProjec(this.projectForm.value)
  }

  updateimg(file: any) {

    if (file.length === 0) {
      return;
    }

    let fileupload = <File>file[0]

    const formdata = new FormData()

    formdata.append('file', fileupload, fileupload.name)

    this.homs.uploadAttachment(formdata)

  }


 
  img: FormGroup = new FormGroup({
    imageuser: new FormControl(),


  })
  image(file: any) {

    if (file.length === 0) {
      return;
    }

    let fileupload = <File>file[0]

    const formdata = new FormData()

    formdata.append('file', fileupload, fileupload.name)

    this.homs.uploadAttachment(formdata)

  }


}