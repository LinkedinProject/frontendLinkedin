import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { jsPDF } from 'jspdf';
import { HomeService } from 'src/app/services/home.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-company-report',
  templateUrl: './company-report.component.html',
  styleUrls: ['./company-report.component.css'],
})
export class CompanyReportComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart2: BaseChartDirective | undefined;
  @ViewChild('MyDIv', { static: false }) el!: ElementRef;
  date = new Date().toISOString;
  constructor(public h: HomeService, private r: Router) { }
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
  clears() {
    sessionStorage.removeItem('compid')
    this.r.navigate([''])
  }
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
  public doughnutChartData1: ChartData<'doughnut'> = {
    labels: ['accepted', 'rejected'],
    datasets: [
      { data: [this.h.accepted22, this.h.rejected22], label: '2022' },
      { data: [this.h.accepted21, this.h.rejected21], label: '2021' },
      { data: [this.h.accepted20, this.h.rejected20], label: '2020' },
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
  compid :any ;
  ngOnInit(): void {


    const x: any = sessionStorage.getItem('compid');
    this.compid = parseInt(x);
    this.h.companypost(this.compid);

    this.h.company_info(this.compid);
    this.h.getReport2022(this.compid );
    this.h.monthlyReport(this.compid);

    setTimeout(() => {
      this.randomize2();
    }, 4000);
  }
  public randomize2(): void {
    // Only Change 3 values
    // console.log('...');

    // console.log(this.h.allApplicantsYear);

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


    // //  console.log("accepted22   "+this.h.accepted22 );
    // //  console.log("rejected22   "+this.h.rejected22 );
    // //  console.log("accepted21   "+this.h.accepted21 );
    // //  console.log("rejected21   "+this.h.rejected21 );
    // //  console.log("accepted20   "+this.h.accepted20 );
    // //  console.log("rejected20   "+this.h.rejected20 );

    // console.log(this.chart2);
    // console.log(this.doughnutChartData1);
    // console.log('...');





    console.log(' randomize2 ...');
    console.log(this.chart2);
    console.log(' randomize2 ...');

    this.chart2?.update();



  }





}
