import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { FORM_DIRECTIVES, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../users/user.service';

@Component({
  templateUrl: './user-login.component.html',
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES],
})
export class UserLoginComponent implements OnInit {

  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;
  submitAttempt: boolean = false;
  message: string = '';

  constructor(
    private router: Router, 
    private userService: UserService, 
    private builder: FormBuilder) {

    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
  }

  loginUser(user: any) {
    this.submitAttempt = true;
    if (this.loginForm.valid) {
      this.userService.login(user)
        .subscribe(
          data => this.router.navigate(['alerts']),
          error => this.handleError(error)
        );
    }
  }

  ngOnInit(): void {
    if (this.userService.isLoggedIn()) { this.router.navigate(['alerts']); }
    this.loginForm = this.builder.group({
      email: this.email,
      password: this.password
    });
  }

  private handleError(error: any) {
      this.message = 'Please try again.';
  }
}