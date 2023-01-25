import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements CanComponentDeactivate {
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.firstName !== '' || this.lastName !== '' || this.email !== '' || this.password !== '') {
      return confirm('do you want to leave');
    }
    else {
      return true;
    }
  }
}
