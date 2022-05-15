import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { AdminRoutingModule } from './admin-routing.module';
import { ControlComponent } from './control/control.component';
import { CategoryComponent } from './category/category.component';
import { SharedModule } from '../shared/shared.module';
import { CreateComponent } from './create/create.component';
import { CompanyComponent } from './company/company.component';
import { AllapplayComponent } from './allapplay/allapplay.component';
import { ReportComponent } from './report/report.component';
import { NgChartsModule } from 'ng2-charts';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { WebsiteComponent } from './website/website.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NanavDashboardAdminComponent } from './nanav-dashboard-admin/nanav-dashboard-admin.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    ControlComponent,
    CategoryComponent,
    CreateComponent,
    CompanyComponent,
    AllapplayComponent,
    ReportComponent,
    AboutComponent,
    UserComponent,
    WebsiteComponent,
    ContactusComponent,
    NanavDashboardAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatDialogModule,
    NgChartsModule ,
    DataTablesModule,
  ]
})
export class AdminModule {




 }
