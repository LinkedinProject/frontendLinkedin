import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobbyidComponent } from './jobbyid.component';

describe('JobbyidComponent', () => {
  let component: JobbyidComponent;
  let fixture: ComponentFixture<JobbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
