import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CustomerPipe } from './pipes/customer.pipe';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { SharedModule } from './shared/shared.module';
import {
  ToastrModule,
  ToastNoAnimation,
  ToastNoAnimationModule,
} from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { JoblistComponent } from './joblist/joblist.component';
import { MatCardModule } from '@angular/material/card';

import { MatTableModule } from '@angular/material/table';
import { DescjobComponent } from './descjob/descjob.component';
import { JobbyidComponent } from './jobbyid/jobbyid.component';
import { CreatecompanyjobComponent } from './createcompanyjob/createcompanyjob.component';
import { TokenInterceptor } from './intsrseptor/toke..interseptor';
import { MatRadioModule } from '@angular/material/radio';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchFilterPipe } from './search-filter.pipe';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBadgeModule } from '@angular/material/badge';
import { SearchComponent } from './search/search.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { TestComponent } from './test/test.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { DialogComponent } from './dialog/dialog.component';
import { CategoryComponent } from './category/category.component';
import { ReportComponent } from './report/report.component';
import { NgxSpinner, NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { UpdateopstComponent } from './updateopst/updateopst.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeToComponent } from './welcome-to/welcome-to.component';
import { NgChartsModule } from 'ng2-charts';
import { PostsComponent } from './usermddule/posts/posts.component';
import { WallComponent } from './wall/wall.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { LiketestComponent } from './liketest/liketest.component';
import { CommentComponent } from './comment/comment.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { EmailComponent } from './email/email.component';
import { DataTablesModule } from 'angular-datatables';
import { ChoiseComponent } from './choise/choise.component';
import { EditcommentComponent } from './editcomment/editcomment.component';
import { CompwallComponent } from './compwall/compwall.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CustomerPipe,
    ContactComponent,

    JoblistComponent,
    DescjobComponent,
    JobbyidComponent,
    CreatecompanyjobComponent,

    SearchFilterPipe,
    SearchComponent,
    TestComponent,
    DialogComponent,
    CategoryComponent,
    ReportComponent,
    UpdateopstComponent,
    WelcomeComponent,
    WelcomeToComponent,
    PostsComponent,
    WallComponent,
    TestimonialComponent,
    LiketestComponent,
    CommentComponent,
    EmailComponent,
    ChoiseComponent,
    EditcommentComponent,
    CompwallComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // FormsModule,
    // ReactiveFormsModule,
    // MatFormFieldModule,
    // MatInputModule,
    SharedModule,
    ToastNoAnimationModule.forRoot(),
    ToastrModule.forRoot(),
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    MatSelectModule,
    MatRadioModule,
    Ng2SearchPipeModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    NgxSpinnerModule,
    NgChartsModule,
    MatSlideToggleModule,
    MatBottomSheetModule,
    DataTablesModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
