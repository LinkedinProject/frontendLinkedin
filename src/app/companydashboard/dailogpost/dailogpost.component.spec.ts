import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailogpostComponent } from './dailogpost.component';

describe('DailogpostComponent', () => {
  let component: DailogpostComponent;
  let fixture: ComponentFixture<DailogpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailogpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailogpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
