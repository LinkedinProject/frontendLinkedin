import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiketestComponent } from './liketest.component';

describe('LiketestComponent', () => {
  let component: LiketestComponent;
  let fixture: ComponentFixture<LiketestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiketestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiketestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
