import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from 'src/app/dataService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user$: { userArr: { name: string; password: string }[] } = {
    userArr: [{ name: '', password: '' }],
  };
  public user: any;
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private ds: DataService,
    private router: Router
  ) {}

  logIn = function (username: string, password: string) {};

  ngOnInit(): void {
    this.logIn = function (username: string, password: string) {
      this.http
        .post<any>('http://localhost:3000/log-in/checkUser', {
          login: username,
          password: password,
        })
        .subscribe(
          (response) => {
            console.log(response);

            if (response) {
              var today = new Date();
              today.setMinutes(today.getMinutes() + 1);
              this.cookieService.set('login', 'true', today);
              console.log('you are logged in');
              this.ds.sendData(true);
              this.router.navigate(['']);
            } else {
              console.log('you are not logged in');
            }
          },
          (error) => {
            console.log(error);
          }
        );
    };
  }
}
