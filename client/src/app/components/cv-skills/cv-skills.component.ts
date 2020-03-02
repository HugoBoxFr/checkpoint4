import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Techno } from 'src/app/shared/techno';
import { Langue } from 'src/app/shared/langue';

@Component({
  selector: 'app-cv-skills',
  templateUrl: './cv-skills.component.html',
  styleUrls: ['./cv-skills.component.css']
})
export class CvSkillsComponent implements OnInit {

  technos: Techno[];
  langues: Langue[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getTechnos();
    this.getLanguages();
  }

  getTechnos() {
    this.userService.getTechnos().subscribe((response: any) => {
      this.technos = response;
    })
  }

  getLanguages() {
    this.userService.getLanguages().subscribe((response: any) => {
      this.langues = response;
    })
  }

}
