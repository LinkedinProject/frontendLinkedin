import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-createbout',
  templateUrl: './createbout.component.html',
  styleUrls: ['./createbout.component.css']
})
export class CreateboutComponent implements OnInit {

  CreateForm:FormGroup=new FormGroup({
    des1: new FormControl('',Validators.required),
    img1:new FormControl(),
    des2:new FormControl('',Validators.required),
    img2:new FormControl(),
    imagename:new FormControl()
  })
constructor(private home:HomeService) { }

ngOnInit(): void {
}
save(){
  this.home.createabout(this.CreateForm.value);
  window.location.reload();
}
uploadImage(file:any){
  if(file.length===0)
  return;
  const uploadfile=<File>file[0];
  // {
  //   file[0]:'photo1.png',

  // }
  const formData=new FormData();
  formData.append('file',uploadfile,uploadfile.name);
  this.home.uploadAttachment(formData);
}

}
