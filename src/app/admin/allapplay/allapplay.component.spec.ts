import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllapplayComponent } from './allapplay.component';

describe('AllapplayComponent', () => {
  let component: AllapplayComponent;
  let fixture: ComponentFixture<AllapplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllapplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllapplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
