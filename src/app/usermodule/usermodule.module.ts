import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsermoduleRoutingModule } from './usermodule-routing.module';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { SharedModule } from '../shared/shared.module';
import { MatRadioModule } from '@angular/material/radio';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { AppliedComponent } from './applied/applied.component';
import { EditeduComponent } from './editedu/editedu.component';
import { PostsComponent } from './posts/posts.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    LoginUserComponent,
    RegisterUserComponent,
    UserprofileComponent,
    EditprofileComponent,
    AppliedComponent,
    EditeduComponent,
    PostsComponent,
    
  ],
  imports: [
    CommonModule,
    UsermoduleRoutingModule,
    SharedModule,
    MatRadioModule,
    MatDialogModule,
    DataTablesModule,

  ]
})
export class UsermoduleModule { }
