import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { FORM_DIRECTIVES, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../users/user.service';
import { FlashMessageComponent } from '../flash-message.component';

@Component({
  templateUrl: './user-registration.component.html',
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, FlashMessageComponent],
})
export class UserRegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  name: FormControl;
  email: FormControl;
  password: FormControl;
  submitAttempt: boolean = false;
  message: string = '';

  constructor(
    private router: Router, 
    private userService: UserService, 
    private builder: FormBuilder) {

    this.name = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.compose([Validators.required, 
                                                            Validators.minLength(8)]));
  }

  registerUser(user: any) {
    this.submitAttempt = true;
    if (this.registrationForm.valid) {
      this.userService.register(user)
          .subscribe(
            data => this.loginAfterRegister(user),
            error => this.handleError(error)
          );
    }
  }

  ngOnInit() {
    this.registrationForm = this.builder.group({
      name: this.name,
      email: this.email,
      password: this.password
    });
  }

  loginAfterRegister(user: any) {
    this.userService.login(user)
      .subscribe(
        data => this.router.navigate(['alerts']),
        error => this.handleError(error)
      );
  }

  private handleError(error: any) {
      this.message = 'Please try again';
  }
}