import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanydashboardRoutingModule } from './companydashboard-routing.module';
import { CompanyhomeComponent } from './companyhome/companyhome.component';
import { CompanyregisterComponent } from './companyregister/companyregister.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { DailogpostComponent } from './dailogpost/dailogpost.component';
import { UserrCompanyComponent } from './userr-company/userr-company.component';
import { NgChartsModule } from 'ng2-charts';
import { CompanyReportComponent } from './company-report/company-report.component';
import { AccountComponent } from './account/account.component';
import { CUComponent } from './c-u/c-u.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    CompanyhomeComponent,
    CompanyregisterComponent,
    DailogpostComponent,
    UserrCompanyComponent,
    CompanyReportComponent,
    AccountComponent,
    CUComponent,
  ],
  imports: [
    CommonModule,
    CompanydashboardRoutingModule,

    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatMenuModule,
    MatDialogModule,
    NgChartsModule,
    DataTablesModule,
  ],
})
export class CompanydashboardModule {}
