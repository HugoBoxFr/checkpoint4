import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvExpComponent } from './cv-exp.component';

describe('CvExpComponent', () => {
  let component: CvExpComponent;
  let fixture: ComponentFixture<CvExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
