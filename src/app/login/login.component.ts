import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'login',
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit{

  data = {
    username: null,
    password: null,
  };

  constructor(
    private router: Router,
    public toast1: ToastsManager,
    public vcr: ViewContainerRef
  ) {
    this.toast1.setRootViewContainerRef(vcr);
  };

  ngOnInit(): void {
    if (this.checkLogin()) this.router.navigate(['/index']);
  };

  ngOnDestroy(): void {
        // this.toast1.dispose();
    }

  checkLogin(): any {
    if (localStorage.getItem("username")) {
      this.toast1.success("Logged in! Redirecting....");
      return true;
    }
    return false;
  }

  enableLogin(): any {
    if (this.data.username && this.data.password)
      return true;
    return false;
  }

  login(): void {
    if (this.enableLogin()) {
      localStorage.setItem("username", this.data.username);
       // this.ss.ParkingType(this.data.username);
      // this.toast1.success("Login successful!");
      this.router.navigate(['/index']);
    } else {
      this.toast1.error("Login failed!");
    }
  }
}

