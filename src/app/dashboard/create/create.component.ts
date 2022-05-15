import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private h :HomeService) { }
createform :FormGroup=new FormGroup({
  categoryName: new FormControl(),
})
  ngOnInit(): void {
  }
cre(){
  console.log(this.createform.value)

  this.h.cretecourse(this.createform.value);

}
  upload(file:any){
    if (file.length === 0)
      return;
    const uploadfile = <File>file[0];
    // {
    //   file[0]:'photo1.png',

    // }
    const formData = new FormData();
    formData.append('file', uploadfile, uploadfile.name);
    this.h.uploadAttachment(formData)
  }
}
