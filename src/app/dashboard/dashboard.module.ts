import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ManagecourseComponent } from './managecourse/managecourse.component';
import { ContentComponent } from './content/content.component';
import { DashComponent } from './dash/dash.component';
import { CreateComponent } from './create/create.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';
import { GetcompanyComponent } from './getcompany/getcompany.component';
import { MatCardModule } from '@angular/material/card';
import { UsersregistedComponent } from './usersregisted/usersregisted.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ManageaboutComponent } from './manageabout/manageabout.component';
import { CreateboutComponent } from './createbout/createbout.component';


@NgModule({
  declarations: [
    ManagecourseComponent,
    ContentComponent,
    DashComponent,
    CreateComponent,
    GetcompanyComponent,
    UsersregistedComponent,
    UpdateuserComponent,
    CompanydetailsComponent,
    AdminpageComponent,
    ManageaboutComponent,
    CreateboutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatDialogModule,
    SharedModule,
    MatCardModule
  ]
})
export class DashboardModule { }
