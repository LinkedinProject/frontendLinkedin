import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from '../authorization.guard';
import { AppliedComponent } from './applied/applied.component';
import { EditeduComponent } from './editedu/editedu.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [

  {path:'login',component:LoginUserComponent},
  {path:'register',component:RegisterUserComponent},
  { path: 'profile', component: UserprofileComponent, canActivate: [AuthorizationGuard]}, 
  { path: 'editprofile', component: EditprofileComponent, canActivate: [AuthorizationGuard]},
  { path: 'applied', component: AppliedComponent, canActivate: [AuthorizationGuard]},
  
  { path: 'editedu', component: EditeduComponent, canActivate:[AuthorizationGuard]},    

  ];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermoduleRoutingModule { }
