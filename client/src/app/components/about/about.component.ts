import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() userToDisplay: User;

  constructor() { }

  ngOnInit() {
  }

}
