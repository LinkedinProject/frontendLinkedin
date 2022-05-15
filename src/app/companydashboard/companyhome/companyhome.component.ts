import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { ChartData } from 'chart.js';
import jsPDF from 'jspdf';
import { BaseChartDirective } from 'ng2-charts';
import { NgxSpinnerService } from 'ngx-spinner';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { EmailComponent } from 'src/app/email/email.component';
import { HomeService } from 'src/app/services/home.service';
import { UpdateopstComponent } from 'src/app/updateopst/updateopst.component';
import { DailogpostComponent } from '../dailogpost/dailogpost.component';
@Component({
  selector: 'app-companyhome',
  templateUrl: './companyhome.component.html',
  styleUrls: ['./companyhome.component.css'],
})
export class CompanyhomeComponent implements OnInit {
  @ViewChild('table') callUpdateDailog!: TemplateRef<any>;
  @ViewChild('menuTrigger') callUpdateDailog2!: TemplateRef<any>;
  @ViewChild('menuTrigger2') callUpdateDailog23!: TemplateRef<any>;
  @ViewChild(BaseChartDirective) chart2: BaseChartDirective | undefined;
  @ViewChild('MyDIv', { static: false }) el!: ElementRef;
  


  postform1: FormGroup = new FormGroup({
    job_title: new FormControl(),
    description: new FormControl(),

    edu_level: new FormControl(),

    post_date: new FormControl(new Date().toISOString()),

    end_date: new FormControl(),
    salary: new FormControl(),
    location: new FormControl(),
    compid: new FormControl(),
    catid: new FormControl(),
  });

  submit() {
    this.postform1.controls['compid'].setValue(this.compid);

    this.h.createpost(this.postform1.value);

  }

  compid: any;
  constructor(
    public h: HomeService,
    public dialog: MatDialog,
    private r: Router,
    private sp:NgxSpinnerService
  ) {}


  public barChartData: ChartData<'bar'> = {
    labels: ['accepted', 'rejected'],
    datasets: [
      {
        data: [],
        label: '2022',
      },
      {
        data: [],
        label: '2021',
      },
      {
        data: [],
        label: '2020',
      },
    ],
  };
  public monthDate: ChartData<'bar'> = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Oug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        data: this.h.allApplicantsYear,
        label: 'monthly report',
      },
    ],
  };
  goToReport() {
    this.r.navigate(['company/report-comp']);
  }
  goToDashboard() {
    this.r.navigate(['company/companyhome']);
  }
  exportAsPDF() {
    let pdf = new jsPDF('l', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save('finalReport.pdf');
      },
    });
    pdf.save();
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



    setTimeout(() => {
      console.log(this.h.allAccepted + 'jk');
      console.log(this.monthDate);
      console.log(this.doughnutChartData1);

      this.randomize2();
    }, 5000);

    const x: any = sessionStorage.getItem('compid');
    this.compid = parseInt(x);
    this.h.companypost(this.compid);

    this.h.company_info(this.compid);
    console.log(this.h.compinfo); 
       this.h.getReport2022(this.compid);
    this.h.monthlyReport(this.compid);
    // this.h.getAll();
  }
  xt: any;

  xr(postid: any) {
    this.h.listofonepost(postid);

    console.log(this.h.l_of_onepost);
  }

  cc() {
    console.log(this.h.allcompanypost);
  }

  date(postid: any) {
    let obg: any = {
      job_id: postid,
      date1: '2022-04-02',
      date2: '2022-04-02',
    };
    this.h.listofonepostbetweendate(obg.value);
  }

  accept(id: any) {
    this.h.updatestatustoaccept(id);
  }

  reject(id: any) {
    this.h.updatestatustoregect(id);
  }

  click(postid: any) {
    localStorage.setItem('postids', postid)

    localStorage.setItem('postApply', postid)


    

    this.h.listofonepost(postid);
    // if(this.h.l_of_onepost.length>0

    // ){

    console.log(this.h.l_of_onepost);

    this.dialog.open(DialogComponent);
  }

  open() {
    this.dialog.open(this.callUpdateDailog2);
  }
  y() {
    this.dialog.open(DailogpostComponent);
    //  this.r.navigate(['create'])
  }



  Delete(id: any) {
    this.h.postid = id;
    this.h.deletAJob();
    window.location.reload();
  }


  clears() {
    sessionStorage.removeItem('compid')
    this.r.navigate([''])
  }
  

  update(id: any) {
    this.h.postid = id;
    localStorage.setItem('postid', this.h.postid);
    this.h.getpstbyidx(id) 
    this.dialog.open(UpdateopstComponent)
    // this.sp.show()
    // setTimeout(() => {
    //   console.log(this.h.xx);
    //   this.sp.hide()
     

    // }, 1000);
  }
  

  public randomize2(): void {
    // Only Change 3 values
    console.log('...');

    console.log(this.h.allApplicantsYear);

    this.doughnutChartData1.datasets[0].data = [
      this.h.accepted22,
      this.h.rejected22,
    ];
    this.doughnutChartData1.datasets[1].data = [
      this.h.accepted21,
      this.h.rejected21,
    ];
    this.doughnutChartData1.datasets[2].data = [
      this.h.accepted20,
      this.h.rejected20,
    ];
    this.monthDate.datasets[0].data = this.h.allApplicantsYear;
    this.chart2?.update();

    //  console.log("accepted22   "+this.h.accepted22 );
    //  console.log("rejected22   "+this.h.rejected22 );
    //  console.log("accepted21   "+this.h.accepted21 );
    //  console.log("rejected21   "+this.h.rejected21 );
    //  console.log("accepted20   "+this.h.accepted20 );
    //  console.log("rejected20   "+this.h.rejected20 );

    console.log(this.chart2);
    console.log(this.doughnutChartData1);
    console.log('...');
  }

  public doughnutChartData1: ChartData<'doughnut'> = {
    labels: ['accepted', 'rejected'],
    datasets: [
      { data: [this.h.accepted22, this.h.rejected22], label: '2022' },
      { data: [this.h.accepted21, this.h.rejected21], label: '2021' },
      { data: [this.h.accepted20, this.h.rejected20], label: '2020' },
    ],
  };
}
