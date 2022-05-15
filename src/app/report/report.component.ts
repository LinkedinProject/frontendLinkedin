import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { jsPDF } from "jspdf";
import { map, Observable, startWith } from 'rxjs';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  @ViewChild('c', { static: false }) el!:ElementRef
  constructor(public h:HomeService) { }
  myControl = new FormControl();
  filteredOptions: Observable<any[]> | undefined;
 
  options:any



x(){
  let r= new jsPDF('p','pt','a4');
  r.html(this.el.nativeElement,{ callback:(pdf)=>{ r.save("demo.pdf")} });
 
}





  ngOnInit(): void {
    
    this.h.getall()
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );


  }
  private _filter(value: any) {
    const filterValue = value.toLowerCase();

    return this.h.data.filter((option: any) => option.categoryName.toLowerCase().includes(filterValue));
  }
}
