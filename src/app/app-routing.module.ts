import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminModule } from './admin/admin.module';
import { AuthorizationGuard } from './authorization.guard';
import { CategoryComponent } from './category/category.component';
import { ChoiseComponent } from './choise/choise.component';
import { CompanydashboardModule } from './companydashboard/companydashboard.module';
import { DailogpostComponent } from './companydashboard/dailogpost/dailogpost.component';
import { CompwallComponent } from './compwall/compwall.component';

import { ContactComponent } from './contact/contact.component';
import { CreateboutComponent } from './dashboard/createbout/createbout.component';
import { DashComponent } from './dashboard/dash/dash.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ManageaboutComponent } from './dashboard/manageabout/manageabout.component';
import { DescjobComponent } from './descjob/descjob.component';
import { HomeComponent } from './home/home.component';
import { JobbyidComponent } from './jobbyid/jobbyid.component';
import { JoblistComponent } from './joblist/joblist.component';
import { LiketestComponent } from './liketest/liketest.component';
import { ReportComponent } from './report/report.component';
import { SearchComponent } from './search/search.component';
import { TestComponent } from './test/test.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { UpdateopstComponent } from './updateopst/updateopst.component';
import { AppliedComponent } from './usermodule/applied/applied.component';
import { EditeduComponent } from './usermodule/editedu/editedu.component';
import { EditprofileComponent } from './usermodule/editprofile/editprofile.component';

import { UsermoduleModule } from './usermodule/usermodule.module';
import { UserprofileComponent } from './usermodule/userprofile/userprofile.component';
import { WallComponent } from './wall/wall.component';
import { WelcomeToComponent } from './welcome-to/welcome-to.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [


  {
    path:'dashboard',
component:DashComponent
},


  {
    path: 'wall',
    component: WallComponent, canActivate: [AuthorizationGuard]

  },

  {
    path: 'like',
    component: LiketestComponent
  },
  {
    path: 't',
    component: TestimonialComponent
  },

  {
    path: 'cc',
    component: UpdateopstComponent
  },

  {
    path: 'create',
    component: DailogpostComponent, canActivate: [AuthorizationGuard]

  },
{
  path:'category',
  component:CategoryComponent
},
  {
    path: 'report',
    component: ReportComponent
  },

{
  path: '',
  component: WelcomeComponent


},
  {
    path: 'welcometo',
    component: WelcomeToComponent


  },
  {
    path: 'cho',
    component: ChoiseComponent


  },

  {

path:'wall2',
component:CompwallComponent


  },
  {

    

    path: 'home',
    component: HomeComponent,
    //  canActivate: [AuthorizationGuard]
  },
  
  {

    path: 'test',
    component: TestComponent,
    //  canActivate: [AuthorizationGuard]
  },
{

  path :'home',
  component:HomeComponent,
   canActivate: [AuthorizationGuard]
},
 
  {

    path: 'joblist',
    component: JoblistComponent
  },
 
  {
    path: 'about',
    component: AboutComponent
},
{path:'contact',

component:ContactComponent
},

  {
    path: 'desc',
component:DescjobComponent
  },


{
  path: 'admin',
  loadChildren: () => AdminModule,
  canActivate:[AuthorizationGuard]

},
  {
    path: 'job',
    component: JobbyidComponent

  },
  {
    path: 'search',
    component: SearchComponent

  },

{
path:'company',

loadChildren:()=>CompanydashboardModule


},
 

 
{

path:'user',
loadChildren:()=>UsermoduleModule


},
{
  path: 'applied',

  component: AppliedComponent
},
{
  path: 'userprofile',
  component: EditprofileComponent
},
{
  path: 'editedu',

  component: EditeduComponent
}, 
{
  path:'manageabout',
  component: ManageaboutComponent,
},

{
  path:'createbout',
  component: CreateboutComponent,
},

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
