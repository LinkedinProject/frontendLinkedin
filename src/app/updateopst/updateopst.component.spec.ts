import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateopstComponent } from './updateopst.component';

describe('UpdateopstComponent', () => {
  let component: UpdateopstComponent;
  let fixture: ComponentFixture<UpdateopstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateopstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateopstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
