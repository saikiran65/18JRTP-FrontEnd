import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppregComponent } from './appreg.component';

describe('AppregComponent', () => {
  let component: AppregComponent;
  let fixture: ComponentFixture<AppregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
