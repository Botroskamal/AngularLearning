import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularLearning';
  selectionTitles: string[];
  getScreenWidth: any;
  getScreenHeight: any;
  btnClicked: boolean = false;

  constructor() {
    this.selectionTitles = ['Dashboard', 'Assets', 'Booking', 'Sell Cars', 'But Cars', 'Services', 'Calender', 'Messages', 'Settings', 'Sign out'];
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  getOpenButtonStatus(buttonClicked: boolean) {
    this.btnClicked = buttonClicked;
  }

  getCloseButtonStatus(buttonClicked: boolean) {
    this.btnClicked = buttonClicked;
  }
}
