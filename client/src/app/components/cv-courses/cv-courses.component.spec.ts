import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvCoursesComponent } from './cv-courses.component';

describe('CvCoursesComponent', () => {
  let component: CvCoursesComponent;
  let fixture: ComponentFixture<CvCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
