import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTodaySurgeryComponent } from './view-today-surgery.component';

describe('ViewTodaySurgeryComponent', () => {
  let component: ViewTodaySurgeryComponent;
  let fixture: ComponentFixture<ViewTodaySurgeryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTodaySurgeryComponent]
    });
    fixture = TestBed.createComponent(ViewTodaySurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
