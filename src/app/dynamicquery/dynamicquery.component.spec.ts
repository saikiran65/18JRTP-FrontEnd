import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicqueryComponent } from './dynamicquery.component';

describe('DynamicqueryComponent', () => {
  let component: DynamicqueryComponent;
  let fixture: ComponentFixture<DynamicqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicqueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
