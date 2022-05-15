import { Injectable, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataTableDirective } from 'angular-datatables';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  @ViewChild(DataTableDirective)
  dtElement !: DataTableDirective;
  dtOptions: DataTables.Settings | any = {};
  dtTrigger: Subject<any> = new Subject();



  posts: any
  coms: any
  m: string = 'welcome';
  t: number = 0;
  descobj: any;
  descobj3: any = {};
  postid: any;
  togs: any = false;
  comments: any
  stu: any
  us: any = new BehaviorSubject(0);
  cv: any;
  allcompanypost: any;
  date: any;
  level: any;
  day: any;
  lastday: any;
  datearrray: any;
  filleducation: any;
  comapny: any;
  search: any = [];
  x: any;
  x2: any;
  totaljob: any;
  selectedCourse: any = {};
  compinfo: any;
  display_Image: any;
  data: any;

  oneuser: any = {};
  joblist: any;
  l_of_onepost: any;
  getcompanys: any = [];
  allusers: any = [];
  arr4: any;
  arr5: any;
  fluttersss: any = [];
  filter: any;
  xx: any = {};
  d: any;
  userdue: any;
  companyimg: any;
  tbyid: any
  constructor(
    private z: HttpClient,
    private to: ToastrService,
    private router: Router,
    public s: NgxSpinnerService
  ) { }

  getall() {
    this.z.get('https://localhost:44306/api/user/getAllCategories').subscribe(
      (res) => {
        this.data = res;
      },
      (s) => {
        this.to.error('cant get category');
      }
    );
  }


  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next(0);
    });
  }

  companypost(comp_id: any) {
    this.z
      .get('https://localhost:44306/api/emp/getAllCompPost/' + comp_id)
      .subscribe(
        (res) => {
          this.allcompanypost = res;
          this.dtTrigger.next(0);
        },
        (s) => {
          this.to.error('cant get all company post');
        }
      );
  }

  searchbetweendate(body: any) {
    this.z
      .post('https://localhost:44306/api/user/GetappliedjobsBetweenDate/', body)
      .subscribe(
        (res) => {
          this.datearrray = res;
        },
        (error) => {
          this.to.error(error.status, error.message);
        }
      );
  }

  getjobbyid(id: any) {
    this.z
      .get('https://localhost:44306/api/user/getjobCaegory/' + id)
      .subscribe(
        (res) => {
          this.arr4 = res;
        },
        (s) => {
          this.to.error('cant get job at category');
        }
      );
  }

  getpostbycompid(comp_id: any) {
    this.z
      .get('https://localhost:44306/api/user/getjobpostbycompid/' + comp_id)
      .subscribe(
        (res) => {
          this.arr5 = res;
        },
        (s) => {
          this.to.error('cant get posted job at company');
        }
      );
  }

  gettotaljob() {
    this.z.get('https://localhost:44306/api/user/getTOtaltJobs').subscribe(
      (res) => {
        this.totaljob = res;
      },
      (s) => {
        this.to.error('cant get total job');
      }
    );
  }
  getpstbyidx(post_id: number) {
    this.z
      .get('https://localhost:44306/api/user/getjopbypostid/' + post_id)
      .subscribe(
        (res) => {
          this.xx = res;
        },
        (s) => {
          this.to.error('cant get job post');
        }
      );
  }

  // getdesc( id:any){
  //   this.descobj=id;
  // }

  jobpost() {
    this.z.get('https://localhost:44306/api/user/getlatestJobs').subscribe(
      (res) => {
        this.joblist = res;
      },
      (s) => {
        this.to.error('cant get latest job');
      }
    );
  }

  alluser() {
    this.z
      .get(' https://localhost:44306/api/admin/GetAllRgisteredUsers')
      .subscribe(
        (res) => {
          this.allusers = res;
          this.dtTrigger.next(0);
        },
        (s) => {
          this.to.error('cant get all register user');
        }
      );
  }
  getcompany() {
    this.z.get('https://localhost:44306/api/user/getAllCompanies').subscribe(
      (res) => {
        this.getcompanys = res;
        this.dtTrigger.next(0);

      },
      (s) => {
        this.to.error('cant gett all company');
      }
    );
  }

  update(body: any) {
    this.z
      .put(' https://localhost:44306/api/user/updateCategory', body)
      .subscribe(
        (res) => {
          body = res;
        },
        (s) => {
          this.to.error('no update category');
        }
      );
  }

  update2(body: any) {
    this.z.put(' https://localhost:44306/api/user/updateUser2', body).subscribe(
      (res) => {
        body = res;
      },
      (s) => {
        this.to.error('no update user');
      }
    );
  }
  update3(body: any) {
    this.z
      .put('https://localhost:44306/api/user/UpdateCompany2 ', body)
      .subscribe(
        (res) => {
          body = res;
        },
        (s) => {
          this.to.error('no update company');
        }
      );
  }
  update4(body: any) {
    this.z.put('https://localhost:44306/api/admin/UpdateJob2', body).subscribe(
      (res) => {
        body = res;
      },
      (s) => {
        this.to.error('no update job');
      }
    );
  }

  createuser(body: any) {
    body.imageuser = this.display_Image;
    this.z.post('https://localhost:44306/api/user/Regester', body).subscribe(
      (res) => {
        debugger;

        this.to.success('saved Successfully :)');
      },
      (error) => {
        this.to.error(error.status, error.message);
      }
    );
  }

  userEdu: any = {}

  fill(body: any) {
    this.z
      .post('https://localhost:44306/api/user/FillEducation', body)
      .subscribe(
        (res) => {

          this.to.success('saved Successfully :)');
        },
        (error) => {
          this.to.error(error.status, error.message);
        }
      );
  }

  getaEducatinal(id: any) {

    this.z.get('https://localhost:44306/api/user/getaEducatinal/' + id).subscribe(
      (res) => {
        console.log(",,,");

        console.log(res);
        console.log(",,,");
        this.userEdu = res;
      },
      (s) => {
        this.to.error('error');
      }
    );
  }
  updateEducatinal(body: any) {
    console.log("body");
    console.log(body);

    this.z.put('https://localhost:44306/api/user/UpdateEducatinal', body).subscribe(
      (res) => {
        body = res;
      },
      (s) => {
        console.log(s);

        this.to.error('no update education');
      }
    );
  }

  filtsrs(body: any) {
    this.z.post('https://localhost:44306/api/user/filters', body).subscribe(
      (res) => {
        this.filter = res;
      },
      (s) => {
        this.to.error('cant search');
      }
    );
  }

  userbyid(userid: number) {
    this.z.get('https://localhost:44306/api/user/userid/' + userid).subscribe(
      (res) => {
        (this.oneuser = res), (this.us = res);
      },
      (s) => {
        this.to.error('no user');
      }
    );

  }





  ts(id: number) {
    this.z.get('https://localhost:44306/api/user/testemonialbyid/' + id).subscribe(
      (res) => {
        this.stu = res
      },
      (s) => {
        this.to.error('get testamnial');
      }
    );

  }



  createcompany(body: any) {
    body.logo = this.companyimg;
    this.z
      .post('https://localhost:44306/api/user/createcompany', body)
      .subscribe(
        (res) => {
          debugger;

          this.to.success('saved Successfully :)');
        },
        (error) => {
          this.to.error(error.status, error.message);
        }
      );
  }
  idcat: any;
  searchjob(body: any) {
    this.z
      .post('https://localhost:44306/api/user/GetByaPostedjobTitle/', body)
      .subscribe(
        (res) => {
          this.joblist = res;
          this.idcat = localStorage.getItem('idid')

          this.arr4 = this.joblist.filter((e: any) => e.catid == this.idcat)


        },
        (error) => {
          this.to.error(error.status, error.message);
        }
      );
  }

  getid(email: any, pass: any) {
    var body = {
      email: email.value.toString(),
      pass: pass.value.toString(),

    };

    this.z
      .post('https://localhost:44306/api/user/userid', body)
      .subscribe((res: any) => {
        console.log(res);
        sessionStorage.setItem('userid', res.userid);
        localStorage.setItem('userid', res.userid);

        // res=res.toString()
      });
  }

  companyid(email: any, pass: any) {
    var body = {
      email: email.value.toString(),
      pass: pass.value.toString(),
    };
    this.z
      .post('https://localhost:44306/api/user/usercompany', body)
      .subscribe((res: any) => {
        console.log(res);
        sessionStorage.setItem('compid', res.compid);
        localStorage.setItem('compid', res.compid);

        // res=res.toString()
      });
  }

  submit(username: any, pass: any) {
    // this.spinner.show();
    // console.log(email.value);
    // console.log(password.value);
    // setTimeout(()=>{
    //   this.spinner.hide();
    // },3000);
    // this.router.navigate(['admin/dashboard']);
    var body = {
      username: username.value.toString(),
      pass: pass.value.toString(),
    };
    const headerDir = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDir),
    };

    this.z
      .post(' https://localhost:44306/api/user/login/', body, requestOptions)
      .subscribe(
        (res: any) => {
          // res=res.toString()
          const responce = {
            token: res.toString(),
          };

          localStorage.setItem('token', responce.token);
          let data: any = jwt_decode(responce.token);

          localStorage.setItem('user', JSON.stringify({ ...data }));
          if (data.role == '1') {

            this.s.show();

            setTimeout(() => {
              this.s.hide();
            }, 6500);
            this.router.navigate(['home']).then(() => {
              this.s.show();
              setTimeout(() => {
                this.s.hide();
                window.location.reload();
              }, 3000);





            });;
            console.log('1');
            this.to.success('you are welcome in job entry')

          } else if (data.role == '2') {
            console.log('2');
            this.to.success('welcome in your company dashboard')

            this.router.navigate(['company/companyhome']).then(() => {
              window.location.reload();
            });;
          }
          else if (data.role == '3') {
            console.log('2');
            this.to.success('Welcome Admin')

            this.router.navigate(['admin/ctrl']).then(() => {
              window.location.reload();
            });;;
          }
        },
        (err) => {
          console.log('-1');

          this.router.navigate(['user/login']);
          this.to.error('Somthing error ');
        }
      );
  }

  cretecourse(body: any) {
    this.z
      .post('https://localhost:44306/api/user/CreateCaegory/', body)
      .subscribe(
        (res) => {
          debugger;

          this.to.success('saved Successfully :)');
        },
        (error) => {
          this.to.error(error.status, error.message);
        }
      );
  }
  // alert() {
  //   setInterval(() => {
  //     this.numb.next(this.
  //       numb.value + 1)
  //   }, 3000)
  //   this.numb.subscribe(value => { alert('values is' + value) })
  // }

  /* uploadAttachment(file: FormData) {
    this.z.post(' https://localhost:44378/api/course/upload/',file)
      .subscribe((res: any) => {
        this.display_Image = res.imagname;
        console.log(this.display_Image);

      }, err => {
        this.to.error(err.status, err.message);
      })
  }*/

  /*userapply(body: any) {

    this.z.post(' https://localhost:44306/api/user/userjopapply', body).subscribe((res) => {
      debugger;

      this.to.success('saved Successfully :)');
    }, error => {

      this.to.error(error.status, error.message);
    })

  }
*/

  getById(id: number) {
    //hits Api
    this.z.get('https://localhost:44306/api/admin/' + 1).subscribe(
      (res) => {
        this.selectedCourse = res;
        // this.spinner.hide();
        this.to.success('Data Retrieved !!');
      },
      (err) => {
        // this.spinner.hide();
        this.to.error(err.message, err.status);
      }
    );
    //hide spinner
    //res --> show toastr
  }

  //

  createabout(body: any) {
    // this.spinner.show();
    body.imagename = this.display_Image;
    this.z.post('https://localhost:44306/api/admin', body).subscribe(
      (res) => {
        debugger;
        // this.spinner.hide();
        this.to.success('saved Successfully :)');
      },
      (error) => {
        // this.spinner.hide();
        this.to.error(error.status, error.message);
      }
    );
  }

  updateapout(body: any) {
    body.img1 = this.display_Image;
    debugger;
    this.z.put('https://localhost:44306/api/admin', body).subscribe(
      (res) => {
        this.to.success('updated Successfully :)');
      },
      (err) => {
        this.to.error(err.status, err.message);
      }
    );
  }

  deleteItem(id: number) {
    this.z.delete('https://localhost:44306/api/admin' + id).subscribe(
      (res) => {
        this.to.success('Deleted Successfully :)');
      },
      (err) => {
        this.to.error(err.status, err.message);
      }
    );
  }

  userapply(body: any) {
    body.uploadcv = this.cv;
    this.z
      .post('https://localhost:44306/api/user/applayforjob', body)
      .subscribe(
        (res) => {
          this.to.success('saved Successfully :)');
        },
        (error) => {
          this.to.error(error.status, error.message);
        }
      );
  }

  uploadAttachment(file: FormData) {
    this.z.post('https://localhost:44306/api/user/UploadCV', file).subscribe(
      (res: any) => {
        this.display_Image = res.imageuser;
        console.log(this.display_Image);
      },
      (err) => {
        this.to.error(err.status, err.message);
      }
    );
  }

  dayaplay(userid: number) {
    this.z
      .get('https://localhost:44306/api/user/TodyAppledJobs/' + userid)
      .subscribe(
        (res) => {
          this.day = res;
          this.dtTrigger.next(0);
        },
        (s) => {
          this.to.error('error');
        }
      );
  }

  usereducation(user_id: number) {
    this.z
      .get('https://localhost:44306/api/user/getaEducatinal/' + user_id)
      .subscribe(
        (res) => {
          this.userdue = res;
        },
        (s) => {
          this.to.error('cant  get education user');
        }
      );
  }

  week(userid: number) {
    this.z
      .get(' https://localhost:44306/api/user/lastWeekAppledJobs/' + userid)
      .subscribe(
        (res) => {
          this.day = res;
          this.dtTrigger.next(0);
        },
        (s) => {
          this.to.error('No retrive data  last week');
        }
      );
  }
  yesterday(userid: number) {
    this.z
      .get('https://localhost:44306/api/user/yesterdayAppledJobs/' + userid)
      .subscribe(
        (res) => {
          this.day = res;
          this.dtTrigger.next(0);
        },
        (s) => {
          this.to.error('No retrive data yestarday');
        }
      );
  }

  alluserapply(userid: number) {
    this.z
      .get('https://localhost:44306/api/user/GetAllAppliedjobsOfUser/' + userid)
      .subscribe(
        (res) => {
          this.day = res;
          this.dtTrigger.next(0);
        },
        (s) => {
          this.to.error('cant get applied job');
        }
      );
  }
  levelofedue(edu: any) {
    this.z
      .get('https://localhost:44306/api/user/jobsbyEduLevel/' + edu)
      .subscribe(
        (res) => {
          this.joblist = res;
        },
        (s) => {
          this.to.error('error');
        }
      );
  }

  flutter(body: any) {
    this.z.post('https://localhost:44306/api/user/filters/', body).subscribe(
      (res) => {
        this.joblist = res;
      },
      (error) => {
        this.to.error(error.status, error.message);
      }
    );
  }
  updateuser(body: any) {
    this.z.put('https://localhost:44306/api/user/updateUser', body).subscribe(
      (res) => {
        body = res;
      },
      (s) => {
        this.to.error('no update user');
      }
    );
  }

  datebetween(body: any) {
    this.z
      .post('https://localhost:44306/api/user/GetappliedjobsBetweenDate/', body)
      .subscribe(
        (res) => {
          this.day = res;
        },
        (error) => {
          this.to.error(error.status, error.message);
        }
      );
  }

  updatimage(body: any) {
    this.z.post('https://localhost:44306/api/user/updateimg', body).subscribe(
      (res) => {
        body = res;
      },
      (s) => {
        this.to.error('cant Update image');
      }
    );

    body.imageuser = this.display_Image;
  }

  createpost(body: any) {
    this.z.post('https://localhost:44306/api/emp/postAJob', body).subscribe(
      (res) => {
        this.to.success('saved Successfully :)');
      },
      (error) => {
        this.to.error(error.status, error.message);
      }
    );
  }

  company_info(comp_id: number) {
    this.z
      .get('https://localhost:44306/api/emp/getcompanybyId/' + comp_id)
      .subscribe(
        (res) => {
          this.compinfo = res;
        },
        (s) => {

        }
      );
  }

  listofonepost(post: number) {
    this.z
      .get('https://localhost:44306/api/emp/getApplyedOfjobPost/' + post)
      .subscribe(
        (res) => {
          this.l_of_onepost = res;
        },

      );
  }

  listofonepostbetweendate(body: any) {
    this.z
      .post(
        'https://localhost:44306/api/emp/getApplyedOfjobPostbetweenDate/',
        body
      )
      .subscribe(
        (res) => {
          this.l_of_onepost = res;
        },
        (s) => {
          this.to.error('No retrive Data');
        }
      );
  }
  //////////////////////////////////////////////////////////////////////////////////////////new

  updatestatustoaccept(job_id: any) {
    this.z
      .get('https://localhost:44306/api/emp/acceptApplicant/' + job_id)
      .subscribe((res) => {
        this.to.success('success');
      });
  }

  updatestatustoregect(job_id: any) {
    this.z
      .get('https://localhost:44306/api/emp/rejectApplicant/' + job_id)
      .subscribe((res) => {
        this.to.success('success');
      });
  }

  uploadAttachment2(file: FormData) {
    this.z
      .post('https://localhost:44306/api/user/UploadCertificate', file)
      .subscribe(
        (res: any) => {
          this.cv = res.uploadcv;
          console.log(this.display_Image);
        },
        (err) => {
          this.to.error(err.status, err.message);
        }
      );
  }

  uploadcompanyimg(file: FormData) {
    this.z.post('https://localhost:44306/api/user/companyimg', file).subscribe(
      (res: any) => {
        this.companyimg = res.logo;
        console.log(this.display_Image);
      },
      (err) => {
        this.to.error(err.status, err.message);
      }
    );
  }
  getJobByType(ty: any) {
    this.z.get('https://localhost:44306/api/user/getJobByType/' + ty).subscribe(
      (res) => {
        this.joblist = res;
      },
      (s) => {
        this.to.error('cant get type job');
      }
    );

    setTimeout(() => {
      console.log(this.joblist);
    }, 3000);
  }

  getJobByTypeCategory(ty: any, cid: any) {
    this.z
      .get(
        'https://localhost:44306/api/user/getJobByTypeCategory/' +
        ty +
        '/' +
        cid
      )
      .subscribe(
        (res) => {
          this.arr4 = res;
        },
        (s) => {
          this.to.error('cant get type job category');
        }
      );
    console.log(cid);

    setTimeout(() => {
      console.log(this.arr4);
    }, 3000);
  }

  //getJobOnsiteRemoteCategory

  getJobOnsiteRemote(ty: any) {
    this.z
      .get('https://localhost:44306/api/user/getJobOnsiteRemote/' + ty)
      .subscribe(
        (res) => {
          this.joblist = res;
        },
        (s) => {
          this.to.error('cant get on site');
        }
      );

    setTimeout(() => {
      console.log(this.joblist);
    }, 3000);
  }

  updatepostcompany(body: any) {
    this.z.put('https://localhost:44306/api/emp/updateAJob', body).subscribe(
      (res) => {
        body = res;
      },
      (s) => {
        this.to.error('no update jop');
      }
    );
  }

  getJobOnsiteRemoteCategory(ty: any, cid: any) {
    this.z
      .get(
        'https://localhost:44306/api/user/getJobOnsiteRemoteCategory/' +
        ty +
        '/' +
        cid
      )
      .subscribe(
        (res) => {
          this.arr4 = res;
        },
        (s) => {
          this.to.error('error2');
        }
      );
    console.log(cid);

    setTimeout(() => {
      console.log(this.arr4);
    }, 3000);
  }

  /////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////
  /////////////////////////-----Report-----///////////////////////////
  /////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////

  temp: any = {};
  email: any
  accepted22: any;
  accepted21: any;
  accepted20: any;

  rejected22: any;
  rejected21: any;
  rejected20: any;
  All22: any;
  All21: any;
  All20: any;

  allApplicantsYear: any = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  allApplicants: any;
  allAccepted: any;
  allRejected: any;

  monthlyReport(comp_id: any) {
    this.allApplicantsYear = [];
    this.z
      .get('https://localhost:44306/api/emp/numberOfJobApplicantsm1/' + comp_id)
      .subscribe(
        (res) => {
          this.temp = res;
          this.allApplicantsYear[0] = this.temp.totals;
          console.log('1 + ' + this.temp.totals);
        },
        (s) => {
          this.to.error('cant numberOfJobApplicantsm1');
        }
      );

    this.z
      .get('https://localhost:44306/api/emp/numberOfJobApplicantsm2/' + comp_id)
      .subscribe(
        (res) => {
          this.temp = res;
          this.allApplicantsYear[1] = this.temp.totals;
          console.log('2 + ' + this.temp.totals);
        },
        (s) => {
          this.to.error('cant numberOfJobApplicantsm2');
        }
      );

    this.z
      .get('https://localhost:44306/api/emp/numberOfJobApplicantsm3/' + comp_id)
      .subscribe(
        (res) => {
          this.temp = res;
          this.allApplicantsYear[2] = this.temp.totals;
          console.log('3 + ' + this.temp.totals);
        },
        (s) => {
          this.to.error('cant numberOfJobApplicantsm3');
        }
      );

    this.z
      .get('https://localhost:44306/api/emp/numberOfJobApplicantsm4/' + comp_id)
      .subscribe(
        (res) => {
          this.temp = res;
          this.allApplicantsYear[3] = this.temp.totals;
          console.log('4 + ' + this.temp.totals);
        },
        (s) => {
          this.to.error('cant numberOfJobApplicantsm4');
        }
      );

    this.z
      .get('https://localhost:44306/api/emp/numberOfJobApplicantsm5/' + comp_id)
      .subscribe(
        (res) => {
          this.temp = res;
          this.allApplicantsYear[4] = this.temp.totals;
          console.log('5 + ' + this.temp.totals);
        },
        (s) => {
          this.to.error('cant error');
        }
      );

    // this.z
    //   .get('https://localhost:44306/api/emp/numberOfJobApplicantsm6/' + comp_id)
    //   .subscribe(
    //     (res) => {
    //       this.temp = res;
    //       this.allApplicantsYear[5] = this.temp.totals;
    //       console.log('6 + ' + this.temp.totals);
    //     },
    //     (s) => {
    //       this.to.error('error');
    //     }
    //   );

    // this.z
    //   .get('https://localhost:44306/api/emp/numberOfJobApplicantsm7/' + comp_id)
    //   .subscribe(
    //     (res) => {
    //       this.temp = res;
    //       this.allApplicantsYear[6] = this.temp.totals;
    //       console.log('7 + ' + this.temp.totals);
    //     },
    //     (s) => {
    //       this.to.error('error');
    //     }
    //   );

    // this.z
    //   .get('https://localhost:44306/api/emp/numberOfJobApplicantsm8/' + comp_id)
    //   .subscribe(
    //     (res) => {
    //       this.temp = res;
    //       this.allApplicantsYear[7] = this.temp.totals;
    //       console.log('8 + ' + this.temp.totals);
    //     },
    //     (s) => {
    //       this.to.error('error');
    //     }
    //   );

    // this.z
    //   .get('https://localhost:44306/api/emp/numberOfJobApplicantsm9/' + comp_id)
    //   .subscribe(
    //     (res) => {
    //       this.temp = res;
    //       this.allApplicantsYear[8] = this.temp.totals;
    //       console.log('9 + ' + this.temp.totals);
    //     },
    //     (s) => {
    //       this.to.error('error');
    //     }
    //   );

    // this.z
    //   .get(
    //     'https://localhost:44306/api/emp/numberOfJobApplicantsm10/' + comp_id
    //   )
    //   .subscribe(
    //     (res) => {
    //       this.temp = res;
    //       this.allApplicantsYear[9] = this.temp.totals;
    //       console.log('10 + ' + this.temp.totals);
    //     },
    //     (s) => {
    //       this.to.error('error');
    //     }
    //   );

    // this.z
    //   .get(
    //     'https://localhost:44306/api/emp/numberOfJobApplicantsm11/' + comp_id
    //   )
    //   .subscribe(
    //     (res) => {
    //       this.temp = res;
    //       this.allApplicantsYear[10] = this.temp.totals;
    //       console.log('11 + ' + this.temp.totals);
    //     },
    //     (s) => {
    //       this.to.error('error');
    //     }
    //   );

    // this.z
    //   .get(
    //     'https://localhost:44306/api/emp/numberOfJobApplicantsm12/' + comp_id
    //   )
    //   .subscribe(
    //     (res) => {
    //       this.temp = res;
    //       this.allApplicantsYear[11] = this.temp.totals;
    //       console.log('12 + ' + this.temp.totals);
    //     },
    //     (s) => {
    //       this.to.error('error');
    //     }
    //   );

    console.log(this.allApplicantsYear);
  }

  getReport2022(comp_id: any) {
    this.z
      .get(
        'https://localhost:44306/api/emp/AnnualAcceptedApplicants22/' + comp_id
      )
      .subscribe(
        (res) => {
          this.temp = res;
          this.accepted22 = this.temp.totals;
        },
        (s) => {
          this.to.error('cant AnnualAcceptedApplicants22');
        }
      );

    this.z
      .get(
        'https://localhost:44306/api/emp/AnnualAcceptedApplicants21/' + comp_id
      )
      .subscribe(
        (res) => {
          this.temp = res;
          this.accepted21 = this.temp.totals;
        },
        (s) => {
          this.to.error(' cant AnnualAcceptedApplicants21');
        }
      );

    this.z
      .get(
        'https://localhost:44306/api/emp/AnnualAcceptedApplicants20/' + comp_id
      )
      .subscribe(
        (res) => {
          this.temp = res;
          console.log('this.temp20');
          console.log(this.temp);

          this.accepted20 = this.temp.totals;
        },
        (s) => {
          this.to.error('cant AnnualAcceptedApplicants20');
        }
      );

    this.z
      .get(
        'https://localhost:44306/api/emp/AnnualRejectedApplicants22/' + comp_id
      )
      .subscribe(
        (res) => {
          this.temp = res;
          this.rejected22 = this.temp.totals;
        },
        (s) => {
          this.to.error('cant AnnualRejectedApplicants22');
        }
      );

    this.z
      .get(
        'https://localhost:44306/api/emp/AnnualRejectedApplicants21/' + comp_id
      )
      .subscribe(
        (res) => {
          this.temp = res;
          this.rejected21 = this.temp.totals;
          console.log(this.rejected21);
        },
        (s) => {
          this.to.error('cant AnnualRejectedApplicants21');
        }
      );

    this.z
      .get(
        'https://localhost:44306/api/emp/AnnualRejectedApplicants20/' + comp_id
      )
      .subscribe(
        (res) => {
          this.temp = res;
          this.rejected20 = this.temp.totals;
          console.log(this.rejected20);
        },
        (s) => {
          this.to.error('cant AnnualRejectedApplicants20');
        }
      );

    this.z
      .get(
        'https://localhost:44306/api/emp/AnnualAllJobApplicants22/' + comp_id
      )
      .subscribe(
        (res) => {
          this.temp = res;
          this.All22 = this.temp.totals;
        },
        (s) => {
          this.to.error('cant AnnualAllJobApplicants22');
        }
      );

    this.z
      .get(
        'https://localhost:44306/api/emp/AnnualAllJobApplicants21/' + comp_id
      )
      .subscribe(
        (res) => {
          this.temp = res;
          this.All21 = this.temp.totals;
        },
        (s) => {
          this.to.error('cant AnnualAllJobApplicants21');
        }
      );

    this.z
      .get(
        'https://localhost:44306/api/emp/AnnualAllJobApplicants20/' + comp_id
      )
      .subscribe(
        (res) => {
          this.temp = res;
          this.All20 = this.temp.totals;
        },
        (s) => {
          this.to.error('cant AnnualAllJobApplicants20');
        }
      );

    console.log('done');

    this.z
      .get(
        'https://localhost:44306/api/emp/numberOfJobAcceptedApplicants/' +
        comp_id
      )
      .subscribe(
        (res) => {
          this.temp = res;
          this.allAccepted = this.temp.totals;
        },
        (s) => {
          this.to.error('error');
        }
      );

    this.z
      .get(
        'https://localhost:44306/api/emp/numberOfJobRejectedApplicants/' +
        comp_id
      )
      .subscribe(
        (res) => {
          this.temp = res;
          this.allRejected = this.temp.totals;
        },
        (s) => {
          this.to.error('error');
        }
      );

    this.z
      .get('https://localhost:44306/api/emp/AllOfJobApplicants/' + comp_id)
      .subscribe(
        (res) => {
          this.temp = res;
          this.allApplicants = this.temp.totals;
        },
        (s) => {
          this.to.error('error');
        }
      );
    console.log(this.allApplicants);
  }




  //
  GetAllJobApplied() {
    this.z.get('https://localhost:44306/api/Admin/GetAllJobApplied/').subscribe(
      (res) => {
        this.adminAplicants = res;
        this.dtTrigger.next(0);
      },
      (s) => {
        this.to.error('error2');
      }
    );










    console.log(this.adminAplicants.length);
  }


  emails(body: any) {
    this.z.post('https://localhost:44306/api/emp/SendEmail/', body).subscribe(
      (res) => {
        console.log(res)
      },

      (s) => {
        this.to.success('Send Email');
      }

    );









  }






  insercomment(body: any) {
    this.z.post('https://localhost:44306/api/user/comment/', body).subscribe(
      (res) => {
        this.to.success('sss')
        // this.coms=res
      },
      (s) => {
        this.to.error('error2');
      }
    );





  }



  getpost() {
    this.z.get('https://localhost:44306/api/user/getpost2/').subscribe(
      (res) => {
        this.posts = res;
      },
      (s) => {
        this.to.error('error2');
      }
    );






  }







  insertcontact(body: any) {
    this.z
      .post('https://localhost:44306/api/user/insertcontact', body)
      .subscribe(
        (res) => {


          this.to.success('saved Successfully :)');
        },
        (error) => {
          this.to.error(error.status, error.message);
        }
      );
  }

  inserttestem(body: any) {
    this.z
      .post('https://localhost:44306/api/user/inserttestm', body)
      .subscribe(
        (res) => {



          this.to.success('Thanks for giving us your opinion');
        },
        (error) => {
          this.to.error(error.status, error.message);
        }
      );
  }


  gettstembyid() {
    this.z
      .get('https://localhost:44306/api/user/testembyid')
      .subscribe(
        (res) => {
          this.tbyid = res
        },
        (error) => {
          this.to.error(error.status, error.message);
        }
      );
  }


  post(body: any) {
    this.z
      .post('https://localhost:44306/api/user/insertpost', body)
      .subscribe(
        (res) => {


          this.to.success('saved Successfully :)');
        },
        (error) => {
          this.to.error(error.status, error.message);
        }
      );
  }
  /////////////////////////////////////////////////////////////////////////////////////////saja





  deletetecomment(com_id: any) {
    this.z
      .get('https://localhost:44306/api/user/deletecomment/' + com_id)
      .subscribe(
        (res) => {


          this.to.warning('comment deleted)');
        },
        (error) => {
          this.to.error(error.status, error.message);
        }
      );
  }





  updatecomment(body: any) {
    this.z
      .post('https://localhost:44306/api/user/updatecmment', body)
      .subscribe(
        (res) => {


          this.to.success('comment changes  :)');
        },
        (error) => {
          this.to.error(error.status, error.message);
        }
      );
  }















  GetAllRgisteredCompanyByDate(dates: any) {
    this.z
      .post(
        'https://localhost:44306/api/admin/GetAllRgisteredCompanyByDate/',
        dates
      )
      .subscribe(
        (res) => {
          this.getcompanys = res;
          this.dtTrigger.next(0);
        },
        (s) => {
          console.log(s);

          this.to.error(s);
        }
      );

    console.log(this.getcompanys.length);
  }

  adminAplicants: any = [];

  //

  // GetAllRgisteredCompanyByDate
  GetAllJobAppliedByDate(dates: any) {
    this.z
      .post('https://localhost:44306/api/admin/GetAllJobAppliedByDate/', dates)
      .subscribe(
        (res) => {
          this.adminAplicants = res;
        },
        (s) => {
          console.log(s);

          this.to.error(s);
        }
      );

    console.log(this.adminAplicants.length);
  }

  userList: any = []
  getAllUsers() {
    this.z
      .get('https://localhost:44306/api/admin/GetAllRgisteredUsers/')
      .subscribe(
        (res) => {

          this.userList = res;

          console.log(this.userList);

        },
        (s) => {
          console.log(s);

          this.to.error(s);
        }
      );
  }
  /////////////////////////////////////////////
  ////////////////////////////////////////////

  website: any;
  getWebsite() {
    this.z
      .get('https://localhost:44306/api/admin/getWebsite/1')
      .subscribe(
        (res) => {
          this.website = res;
        },
        (s) => {
          console.log(s);

          this.to.error(s);
        }
      );
  }

  updateWebsite(body: any) {
    this.z
      .put('https://localhost:44306/api/admin/UpdateWebsite', body)
      .subscribe(
        (res) => {
          this.to.success('updated Successfully :)');
        },
        (s) => {
          console.log(s);

          this.to.error(s);
        }
      );
  }



  ////////////////////////////////////////////////////////'
  /////////////////////////////////////////////////////
  about: any;
  getabout() {
    this.z
      .get('https://localhost:44306/api/admin/getabout/1')
      .subscribe(
        (res) => {
          this.about = res;
        },
        (s) => {
          console.log(s);

          this.to.error(s);
        }
      );
  }

  updateAbout(body: any) {
    this.z
      .put('https://localhost:44306/api/admin/UpdateAbout', body)
      .subscribe(
        (res) => {
          this.to.success('updated Successfully :)');
        },
        (s) => {
          console.log(s);

          this.to.error(s);
        }
      );
  }

  ////////////////////////////////////////////
  ///////////////////////////////////////////////

  contact: any;
  getContact() {
    this.z
      .get('https://localhost:44306/api/admin/getContact/1')
      .subscribe(
        (res) => {
          this.contact = res;
        },
        (s) => {
          console.log(s);

          this.to.error(s);
        }
      );
  }

  UpdateContact(body: any) {
    this.z
      .put('https://localhost:44306/api/admin/UpdateContact', body)
      .subscribe(
        (res) => {
          this.to.success('updated Successfully :)');
        },
        (s) => {
          console.log(s);

          this.to.error(s);
        }
      );
  }

  /////////////////////////////////////////////////////
  //////////////////// Admin Report ///////////////////////////
  /////////////////////////////////////////////////////
  /////////////////////////////////////////////////////
  companyJobs: any = [];

  GetNumJobPostByCompanyDate(dates: any) {
    console.log(dates);

    this.z
      .post('https://localhost:44306/api/admin/GetNumJobPostByCompanyDate/', dates)
      .subscribe(
        (res) => {
          this.companyJobs = res;
        },
        (s) => {
          console.log(s);
          this.to.error(s);
        }
      );
  }

  GetNumJobPostByCompany() {
    this.z
      .get('https://localhost:44306/api/admin/GetNumJobPostByCompany/')
      .subscribe(
        (res) => {
          this.companyJobs = res;
        },
        (s) => {
          this.to.error(s);
        }
      );
  }
  deletAJob() {
    console.log(this.postid);
    this.z
      .delete('https://localhost:44306/api/emp/deletAJob/' + this.postid)
      .subscribe(
        (res) => {
          this.to.success("......");
        },
        (s) => {
          this.to.error(s);
        }
      );
  }

  ///   ------------------------------------------------------------------------------
  ///   ------------------------------------------------------------------------------
  ///   -----------------------------  User Profile ---------------------------------
  ///   ------------------------------------------------------------------------------
  ///   ------------------------------------------------------------------------------

  recommendations: any = []

  InsertRecommenndation(body: any) {
    console.log(body);

    this.z
      .post('https://localhost:44306/api/user/InsertRecommenndation/', body)
      .subscribe(
        (res) => {
          this.to.success("Recommenndation Successfully");
        },
        (s) => {
          console.log(s);
          this.to.error(s);
        }
      );
  }

  GetRecommenndationSender(id: any) {
    this.z
      .get('https://localhost:44306/api/user/getSentRec/' + id)
      .subscribe(
        (res) => {
          this.recommendations = res;
        },
        (s) => {
          this.to.error(s);
        }
      );
  }

  GetRecommenndationResever(id: any) {
    this.z
      .get('https://localhost:44306/api/user/getresevedRec/' + id)
      .subscribe(
        (res) => {
          this.recommendations = res;
        },
        (s) => {
          this.to.error(s);
        }
      );
  }

  userProjects: any = []

  GetUserProjects(user: any) {
    console.log(user);
    console.log(typeof user);

    this.z
      .get('https://localhost:44306/api/user/GetUserProjects/' + user)
      .subscribe(
        (res) => {
          this.userProjects = res;
          setTimeout(() => {
            console.log(this.userProjects);

          }, 1500);
        },
        (s) => {
          this.to.error(s);
        }
      );
  }

  like(body: any) {
    this.z
      .get('https://localhost:44306/api/user/like/' + body)
      .subscribe(
        (res) => {
          this.to.success('updated Successfully :)');
        })

  }

  dlike(body: any) {
    this.z
      .get('https://localhost:44306/api/user/dislike/' + body)
      .subscribe(
        (res) => {
          this.to.success('updated Successfully :)');
        })

  }


  getcomments(x: any) {
    this.z.get('https://localhost:44306/api/user/getcomment/' + x).subscribe(
      (res) => {
        this.comments = res;
      },
      (s) => {
        this.to.error('error2');
      }
    );
  }


  //
  insertExp(body: any) {
    console.log(body);

    this.z
      .post('https://localhost:44306/api/user/insertExp/', body)
      .subscribe(
        (res) => {
          this.to.success("Recommenndation Successfully");
        },
        (s) => {
          console.log(s);
          this.to.error(s);
        }
      );
  }

  insertProjec(body: any) {
    console.log("body");
    console.log(body);

    this.z
      .post('https://localhost:44306/api/user/addProject/', body)
      .subscribe(
        (res) => {
          this.to.success("Recommenndation Successfully");
        },
        (s) => {
          console.log(s);
          this.to.error(s);
        }
      );
  }

  exp: any = []
  getExp(id: any) {
    this.z.get('https://localhost:44306/api/user/GetExperiences/' + id).subscribe(
      (res) => {
        this.exp = res;
      },
      (s) => {
        this.to.error('cant get category');
      }
    );
  }
}
