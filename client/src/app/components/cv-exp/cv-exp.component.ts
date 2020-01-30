import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Experience } from 'src/app/shared/experience';

@Component({
  selector: 'app-cv-exp',
  templateUrl: './cv-exp.component.html',
  styleUrls: ['./cv-exp.component.css']
})
export class CvExpComponent implements OnInit {

  exp: Experience[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getExp();
  }

  getExp() {
    this.userService.getExp().subscribe((response: any) => {
      this.exp = response;
    })
  }

}
