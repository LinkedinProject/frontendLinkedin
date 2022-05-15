import { ContentChildren, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { ContentComponent } from './content/content.component';
import { CreateComponent } from './create/create.component';
import { CreateboutComponent } from './createbout/createbout.component';
import { DashComponent } from './dash/dash.component';
import { GetcompanyComponent } from './getcompany/getcompany.component';
import { ManageaboutComponent } from './manageabout/manageabout.component';
import { ManagecourseComponent } from './managecourse/managecourse.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UsersregistedComponent } from './usersregisted/usersregisted.component';

const routes: Routes = [


{

path:'dashborad',
component:DashComponent
},
  {

    path: 'company',
    component: GetcompanyComponent
  },
  {

    path: 'companydetails',
    component: CompanydetailsComponent
  },
  {

    path: 'usersregisted',
    component: UsersregistedComponent
  
  },
{
  path: 'm',
  component: ManagecourseComponent
},
{
  path: 'content',
  component: ContentComponent
},
{
path: 'create',
  component: CreateComponent
},

  {
    path: 'updateuser',
    component: UpdateuserComponent
  },

  {
    path: 'adminpage',
    component: AdminpageComponent
  },
  {
    path:'manageabout',
    component: ManageaboutComponent,
  },
  
  {
    path:'createbout',
    component: CreateboutComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
