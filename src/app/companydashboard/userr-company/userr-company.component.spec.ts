import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserrCompanyComponent } from './userr-company.component';

describe('UserrCompanyComponent', () => {
  let component: UserrCompanyComponent;
  let fixture: ComponentFixture<UserrCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserrCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserrCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
