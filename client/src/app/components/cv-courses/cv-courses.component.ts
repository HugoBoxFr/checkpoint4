import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Formation } from 'src/app/shared/formation';

@Component({
  selector: 'app-cv-courses',
  templateUrl: './cv-courses.component.html',
  styleUrls: ['./cv-courses.component.css']
})
export class CvCoursesComponent implements OnInit {
  courses: Formation;

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.userService.getCourses().subscribe((response: any) => {
      this.courses = response;
    })
  }

}
