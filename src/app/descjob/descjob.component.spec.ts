import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescjobComponent } from './descjob.component';

describe('DescjobComponent', () => {
  let component: DescjobComponent;
  let fixture: ComponentFixture<DescjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescjobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
