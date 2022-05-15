import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeduComponent } from './editedu.component';

describe('EditeduComponent', () => {
  let component: EditeduComponent;
  let fixture: ComponentFixture<EditeduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
