import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-allapplay',
  templateUrl: './allapplay.component.html',
  styleUrls: ['./allapplay.component.css'],
})
export class AllapplayComponent implements OnInit {
  @ViewChild('c', { static: false }) el!: ElementRef

  constructor(public h: HomeService, private r: Router) {}
  getcmpany() {
    this.r.navigate(['admin/company']);
  }
  allusers() {
    this.r.navigate(['admin/usersregisted']);
  }

  userprofile() {
    this.r.navigate(['admin/profileuser']);
  }
  manageabout() {
    this.r.navigate(['admin/manageabout']);
  }

  dashboard() {
    this.r.navigate(['admin/dashboard']);
  }
  dateForm: FormGroup = new FormGroup({
    date1: new FormControl(),
    date2: new FormControl(),
  });

  betweendateapplicant() {
    console.log(this.dateForm.value);
    this.h.GetAllJobAppliedByDate(this.dateForm.value);
  }
  ngOnInit(): void {

    this.h.dtOptions = {

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
    this.h.GetAllJobApplied();
  }

  x() {
    let r = new jsPDF('p', 'pt', 'a4');
    r.html(this.el.nativeElement, { callback: (pdf) => { r.save("demo.pdf") } });

  }




}
