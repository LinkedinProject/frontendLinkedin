import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { CreateboutComponent } from '../createbout/createbout.component';

@Component({
  selector: 'app-manageabout',
  templateUrl: './manageabout.component.html',
  styleUrls: ['./manageabout.component.css']
})
export class ManageaboutComponent implements OnInit {

  @ViewChild('callUpdateDailog') callUpdateDailog! :TemplateRef<any>
  @ViewChild('callDeleteDailog') callDeleteDailog! :TemplateRef<any>
  constructor(private dialog:MatDialog, public home:HomeService ,private r :Router) { }
  aboutu:any={};

  ngOnInit(): void {
  }
  create()
  {
    this.dialog.open(CreateboutComponent);
  }
  openUpdateDailog(A_Id :any,
    A_Desc1 :any,A_image1:any,A_Desc2:any,A_Image2:any ){
     console.log(A_Id,A_Desc1);
     this.aboutu={
       des1:A_Desc1,
       img1:A_image1,
       des2:A_Desc2,
       imgg2:A_Image2
     }
     console.log(this.aboutu);
     this.UpdateForm.controls['aboutid'].setValue(this.aboutu.aboutid)
     this.dialog.open(this.callUpdateDailog);
   }

   UpdateForm:FormGroup=new FormGroup({
     aboutid:new FormControl(),
      des1: new FormControl(),
      img1:new FormControl(),
      des2:new FormControl(),
      img2:new FormControl()
  })
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
  update(){
    this.home.updateapout(this.UpdateForm.value);
  }
  openDeleteDailog(id:number)
  {
      const dialogRef=this.dialog.open(this.callDeleteDailog);
      dialogRef.afterClosed().subscribe((result)=>{
        if(result!=undefined)
        {
          if(result=='yes')
          this.home.deleteItem(id);
          else if(result=='no')
          console.log("Thank you ");
          
        }
      })
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
