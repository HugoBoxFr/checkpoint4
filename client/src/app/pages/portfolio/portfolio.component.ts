import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Project } from 'src/app/shared/project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects: Project[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.userService.getProjects().subscribe((response: any) => {
      this.projects = response;
    })
  }
}
