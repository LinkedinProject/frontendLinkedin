import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecompanyjobComponent } from './createcompanyjob.component';

describe('CreatecompanyjobComponent', () => {
  let component: CreatecompanyjobComponent;
  let fixture: ComponentFixture<CreatecompanyjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecompanyjobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecompanyjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
