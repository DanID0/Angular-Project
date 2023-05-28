import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from 'src/app/dataService';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public user$: { userArr: { name: string; password: string }[] } = {
    userArr: [{ name: '', password: '' }],
  };
  constructor(
    private http: HttpClient,
    private ds: DataService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  signUp = (username: string, password: string) => {};
  ngOnInit(): void {
    console.log(this.checkForDigets('rtehrtDSGeh'));

    this.signUp = (username: string, password: string) => {
      let user: User = {
        username: username,
        password: password,
        email: 'test@dsfwqe.ss',
        name: 'test',
      };

      if (this.checkFields(user)) {
        this.http
          .post<any>('http://localhost:3000/sign-up/registerUser', {
            login: username,
            password: password,
          })
          .subscribe(
            (response) => {
              if (response) {
                console.log('you are registered');
                var today = new Date();
                today.setMinutes(today.getMinutes() + 1);
                this.cookieService.set('login', 'true', today);
                this.ds.sendData(true);
                this.router.navigate(['']);
              } else {
                console.log('you cannot be registered ');
              }
            },
            (error) => {
              console.log(error);
            }
          );
      }
    };
  }
  checkEmail(email: string): boolean {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }
  checkPassword(password: string): boolean {
    let regex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,}$/;
    return regex.test(password);
  }
  checkForDigets(word: string): boolean {
    let regex = /^[a-zA-Z]{1,}$/;
    return regex.test(word);
  }

  checkFields(userData: User): boolean {
    let result = [];

    result.push(this.checkEmail(userData.email));
    result.push(this.checkPassword(userData.password));
    result.push(this.checkForDigets(userData.name));
    result.push(this.checkForDigets(userData.username));

    return !result.includes(false);
  }
}
export interface User {
  password: string;
  username: string;
  email: string;
  name: string;
}
// {
//   "userArr": [
//     { "name": "user", "password": "userCool" },
//     { "name": "admin", "password": "admin" }
//   ]
// }
