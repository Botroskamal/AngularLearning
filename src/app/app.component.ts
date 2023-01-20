import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularLearning';
  selectionTitles: string[];

  constructor() {
    this.selectionTitles = ['Dashboard', 'Assets', 'Booking', 'Sell Cars', 'But Cars', 'Services', 'Calender', 'Messages', 'Settings', 'Sign out'];
  }
}
