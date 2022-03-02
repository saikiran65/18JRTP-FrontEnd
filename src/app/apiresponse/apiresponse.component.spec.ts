import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiresponseComponent } from './apiresponse.component';

describe('ApiresponseComponent', () => {
  let component: ApiresponseComponent;
  let fixture: ComponentFixture<ApiresponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiresponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
