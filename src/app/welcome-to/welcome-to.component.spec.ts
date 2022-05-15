import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeToComponent } from './welcome-to.component';

describe('WelcomeToComponent', () => {
  let component: WelcomeToComponent;
  let fixture: ComponentFixture<WelcomeToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeToComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
