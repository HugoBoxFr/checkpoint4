import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() userToDisplay : User;

  constructor() { }

  ngOnInit() {
  }

}
