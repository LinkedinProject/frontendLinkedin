import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-applied',
  templateUrl: './applied.component.html',
  styleUrls: ['./applied.component.css']
})
export class AppliedComponent implements OnInit {
  last() {
    this.homs.yesterday(parseInt(this.id))
    console.log(this.homs.lastday)

  }
  date: FormGroup = new FormGroup({
    userid: new FormControl(),
    date1: new FormControl(),
    date2: new FormControl(),

  })
  id:any
  constructor(private r:Router ,public homs:HomeService) { }
  toggle:boolean=true
  ngOnInit(): void {

    this.homs.dtOptions = {

      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        'columnsToggle',
        'colvis',
        'copy',
        'print',
        'excel',
        'csv',
        'pdf',
        {
          text: 'Some button',
          key: '1',
          action: function (e: any, dt: any, node: any, config: any) {
            alert('Button activated');
          }
        }
      ]
    };

   this.id=sessionStorage.getItem('userid')

console.log(this.id)

  
this.homs.alluserapply(this.id)

  }
  clears(){
    localStorage.clear()
      this.r.navigate(['loginuser'])
    }

  today() {
    this.homs.dayaplay(parseInt(this.id))
    console.log(this.homs.day)
  }

  week() {
    this.homs.week(parseInt(this.id))
    console.log(this.homs.day)
  }


  betweendate() {

    this.date.controls['userid'].setValue(parseInt(this.id))
    this.homs.datebetween(this.date.value)
    console.log(this.date.value)

    console.log(this.homs.day)
  }

}
