import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  @Input() compname: string | undefined;
  @Input() location: string | undefined;
  @ViewChild('callupcompany') callupcompany!: TemplateRef<any>;

  obj3: any = {};
  constructor(public h: HomeService, private r: Router, private o: MatDialog) {}

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
    this.h.getcompany();
  }
  descrption(x: any) {
    this.h.comapny = {
      l: x.location,
      specialties: x.specialties,
      descreption: x.descreption,
      regDate: x.regDate,
      phone: x.phone,
      website_Url: x.website_Url,
      compid: x.compid,
    };
    this.r.navigate(['admin/companydetails']);
  }

  updatecompany: FormGroup = new FormGroup({
    compid: new FormControl(),
    compname: new FormControl(),
    location: new FormControl(),

    descreption: new FormControl(),
  });

  upup(copmid: any, compname: any, location: any, descreption: any) {
    this.obj3 = {
      copmid: copmid,
      compname: compname,
      location: location,
      descreption: descreption,
    };

    this.updatecompany.controls['compid'].setValue(copmid);

    this.o.open(this.callupcompany);
  }

  xx() {
    alert('dgdrtgh');
  }
  upcomp() {
    this.h.update3(this.updatecompany.value);
  }

  toggle: boolean = true;

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

  tog() {
    this.toggle = false;
    this.r.navigate(['admin/m']);
  }
  dashboard() {
    this.r.navigate(['admin/dashboard']);
  }
  dateForm: FormGroup = new FormGroup({
    date1: new FormControl(),
    date2: new FormControl(),
  });

  betweendates() {
    console.log(this.dateForm.value);
    this.h.GetAllRgisteredCompanyByDate(this.dateForm.value);
  }
}
