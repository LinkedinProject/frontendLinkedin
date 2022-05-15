import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HComponent } from './h/h.component';
import { FComponent } from './f/f.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';



@NgModule({
  declarations: [
    HComponent,
    FComponent,
    
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
     FormsModule,
     ReactiveFormsModule,
     RouterModule,
     MatBadgeModule
],
exports:[

  MatFormFieldModule,
  MatInputModule,
  FormsModule,
  ReactiveFormsModule,
   HComponent,
  FComponent,
  RouterModule,
  MatBadgeModule

],


})
export class SharedModule { 

  

}
