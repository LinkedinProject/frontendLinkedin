import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUComponent } from './c-u.component';

describe('CUComponent', () => {
  let component: CUComponent;
  let fixture: ComponentFixture<CUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
