import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersregistedComponent } from './usersregisted.component';

describe('UsersregistedComponent', () => {
  let component: UsersregistedComponent;
  let fixture: ComponentFixture<UsersregistedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersregistedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersregistedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
