import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { EditcommentComponent } from '../editcomment/editcomment.component';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
id:any
posstid:any
x:any=0
compid:any
write :FormGroup=new FormGroup({

userid:new FormControl(),
  comments: new FormControl(),

  dates: new FormControl((new Date()).toISOString()),
  postid: new FormControl(),

}
  )
  constructor(public h: HomeService, public dialog: MatDialog) { }

  ngOnInit(): void {

this.posstid=sessionStorage.getItem('postid')
console.log(this.posstid)
    this.id = sessionStorage.getItem('userid')
    // this.h.userbyid(parseInt(this.id))
    // this.compid = sessionStorage.getItem('compid')
    // this.h.company_info(parseInt(this.compid))

    this.h.getpost()
  }

wr(){

  this.write.controls['userid'].setValue(parseInt(this.id))
  this.write.controls['postid'].setValue(parseInt(this.posstid))

  this.h.insercomment(this.write.value)
}

edit(x:any){
  sessionStorage.setItem('com_id',x)
this.dialog.open(EditcommentComponent)
}
  deletes(x: any) {
  
    this.h.deletetecomment(x)
  }
}
