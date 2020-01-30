import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3000';
  user: User;

  constructor(private http : HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  };

  getTechnos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/technos`);
  };

  getCourses(): Observable<any> {
    return this.http.get(`${this.baseUrl}/formations`)
  }

  getExp(): Observable<any> {
    return this.http.get(`${this.baseUrl}/experiences`)
  }

  getLanguages(): Observable<any> {
    return this.http.get(`${this.baseUrl}/langues`)
  }

  getProjects(): Observable<any> {
    return this.http.get(`${this.baseUrl}/projects`)
  }
}
