import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateboutComponent } from './createbout.component';

describe('CreateboutComponent', () => {
  let component: CreateboutComponent;
  let fixture: ComponentFixture<CreateboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
