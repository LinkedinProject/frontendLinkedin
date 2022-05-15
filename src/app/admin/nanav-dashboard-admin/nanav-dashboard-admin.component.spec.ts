import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NanavDashboardAdminComponent } from './nanav-dashboard-admin.component';

describe('NanavDashboardAdminComponent', () => {
  let component: NanavDashboardAdminComponent;
  let fixture: ComponentFixture<NanavDashboardAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NanavDashboardAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NanavDashboardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
