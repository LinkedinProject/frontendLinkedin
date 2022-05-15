import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CompanyComponent } from './company/company.component';
import { ControlComponent } from './control/control.component';
import { CreateComponent } from './create/create.component';
import { AllapplayComponent } from './allapplay/allapplay.component';
import { ReportComponent } from './report/report.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { WebsiteComponent } from './website/website.component';
import { ContactusComponent } from './contactus/contactus.component';
const routes: Routes = [

  {
    path: 'ctrl',

    component: ControlComponent,
  },
  {
    path: 'applicants',

    component: AllapplayComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'catagories',
    component: CategoryComponent,
  },
  {
    path: 'companies',
    component: CompanyComponent,
  },
  {
    path: 'users',
    component: UserComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contactus',
    component: ContactusComponent,
  },
  {
    path: 'website',
    component: WebsiteComponent,
  },
  {
    path: 'report',
    component: ReportComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }