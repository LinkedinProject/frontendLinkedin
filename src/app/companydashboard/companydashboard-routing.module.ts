import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from '../authorization.guard';
import { AccountComponent } from './account/account.component';
import { CUComponent } from './c-u/c-u.component';
import { CompanyReportComponent } from './company-report/company-report.component';
import { CompanyhomeComponent } from './companyhome/companyhome.component';
import { CompanyregisterComponent } from './companyregister/companyregister.component';
import { UserrCompanyComponent } from './userr-company/userr-company.component';

const routes: Routes = [
  {
    path: 'report-comp',
    component: CompanyReportComponent,
  },
  {
    path: 'companyhome',
    component: CompanyhomeComponent, canActivate: [AuthorizationGuard]

  },
  {
    path: 'company-r',
    component: CompanyregisterComponent,
  },
  {
    path: 'user-company',
    component: UserrCompanyComponent, canActivate: [AuthorizationGuard]

  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'c_u',
    component: CUComponent ,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanydashboardRoutingModule {}
