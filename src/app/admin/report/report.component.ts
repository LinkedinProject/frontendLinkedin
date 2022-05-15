import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ChartData } from 'chart.js';
import jsPDF from 'jspdf';
import { BaseChartDirective } from 'ng2-charts';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart2: BaseChartDirective | undefined;
  @ViewChild('c', { static: false }) el!: ElementRef;

  betweendateJobs() {
    this.h.GetNumJobPostByCompanyDate(this.dateForm.value)
    setTimeout(() => {
      console.log(this.h.companyJobs);

      this.companyNames = this.h.companyJobs.map((item: any, index: any, arr: any) => {

        return item.company.split(' ').splice(0, 1)
        // console.log('index', index)
        // console.log('arr', arr.name)
      })
      this.company2Jobs = this.h.companyJobs.map((item: any, index: any, arr: any) => {

        return item.totals
        // console.log('index', index)
        // console.log('arr', arr.name)
      })
      console.log(this.companyNames);
      console.log(this.company2Jobs);
      this.randomize2()
    }, 2000);
  }
  //
  betweendateComp() {
    this.h.GetAllRgisteredCompanyByDate(this.dateForm.value)
    setTimeout(() => {
      console.log(this.h.getcompanys.length);
      this.randomize2()
    }, 2000);
  }
 
  dateForm: FormGroup = new FormGroup({

    date1: new FormControl(),
    date2: new FormControl(),

  })
  public barChartData: ChartData<'bar'> = {


    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: 'rgb(50,80,180)',
        borderColor: 'rgb(148,159,177)'
      },

    ],
  };

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
  companyNames: any = [];
  company2Jobs: any = [];
  constructor( public h:HomeService,private r :Router) { }

  ngOnInit(): void {

    this.h.GetNumJobPostByCompany()
    this.h.getcompany()
    setTimeout(() => {
      console.log(this.h.companyJobs);

      this.companyNames = this.h.companyJobs.map((item: any, index: any, arr: any) => {

        return item.company.split(' ').splice(0, 1)
        // console.log('index', index)
        // console.log('arr', arr.name)
      })
      this.company2Jobs = this.h.companyJobs.map((item: any, index: any, arr: any) => {

        return item.totals
        // console.log('index', index)
        // console.log('arr', arr.name)
      })
      console.log(this.companyNames);
      console.log(this.company2Jobs);
      this.randomize2()
    }, 2000);



  }
  public randomize2(): void {
    // Only Change 3 values
    console.log('.....  randomize2 ....');

    console.log(this.company2Jobs);

    this.barChartData.datasets[0].data = this.company2Jobs;
    this.barChartData.datasets[0].label = " Company Jobs ";
    this.barChartData.labels = this.companyNames;

    this.chart2?.update();



    console.log(this.chart2);
    console.log(this.barChartData);
    console.log('...');
  }

  x() {
    let r = new jsPDF('p', 'pt', 'a4');
    r.html(this.el.nativeElement, { callback: (pdf) => { r.save("report.pdf") } });

  }


}
