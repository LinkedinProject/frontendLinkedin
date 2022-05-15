import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageaboutComponent } from './manageabout.component';

describe('ManageaboutComponent', () => {
  let component: ManageaboutComponent;
  let fixture: ComponentFixture<ManageaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageaboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
