import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../dataService';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SignupComponent } from '../components/login-signup-system/signup/signup.component';
import { LoginComponent } from '../components/login-signup-system/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  bsModalRef?: BsModalRef;
  public isLoginIn: any;
  public subscription: Subscription;

  constructor(private ds: DataService, private modalService: BsModalService) {
    this.subscription = this.ds.getData().subscribe((x) => {
      this.isLoginIn = x;
    });
  }

  openSingUpModal() {
    this.bsModalRef = this.modalService.show(SignupComponent);
  }
  openSignInModal() {
    this.bsModalRef = this.modalService.show(LoginComponent);
  }

  ngOnInit(): void {}
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
