import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/project';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  title: string = 'Une sélection de mes projets...'

  projects: Project[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.userService.getProjects().subscribe((response: any) => {
      this.projects = response.splice(0, 3);
    })
  }

}
