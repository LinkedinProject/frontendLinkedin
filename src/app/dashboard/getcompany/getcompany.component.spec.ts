import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcompanyComponent } from './getcompany.component';

describe('GetcompanyComponent', () => {
  let component: GetcompanyComponent;
  let fixture: ComponentFixture<GetcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
