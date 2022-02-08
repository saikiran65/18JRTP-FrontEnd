import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynqueryComponent } from './dynquery.component';

describe('DynqueryComponent', () => {
  let component: DynqueryComponent;
  let fixture: ComponentFixture<DynqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynqueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
