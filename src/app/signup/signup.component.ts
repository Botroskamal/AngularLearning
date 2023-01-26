import { Component, DoCheck, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements DoCheck, CanComponentDeactivate {
  @ViewChild('f') form: NgForm;

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
  ngDoCheck(): void {
    // console.log("ooooooooooooooooooooooooo")
    // console.log(this.form);
  }
}
