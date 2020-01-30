import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/user';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() userToFooter: User;

  user: User;

  contactForm = this.fb.group({
    name:'',
    mail: '',
    subject: '',
    message: ''
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
