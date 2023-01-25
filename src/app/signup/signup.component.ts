import { Component } from '@angular/core';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements CanComponentDeactivate {

}
