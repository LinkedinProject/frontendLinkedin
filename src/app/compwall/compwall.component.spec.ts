import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompwallComponent } from './compwall.component';

describe('CompwallComponent', () => {
  let component: CompwallComponent;
  let fixture: ComponentFixture<CompwallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompwallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompwallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
