import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  bigMenuSelections = [
    { selectionText: 'Dashboard', imageSource: 'assets/images/sidebar/Dashboard.png' },
    { selectionText: 'Assets', imageSource: 'assets/images/sidebar/Assets.png' },
    { selectionText: 'Booking', imageSource: 'assets/images/sidebar/Booking.png' },
    { selectionText: 'Sell Cars', imageSource: 'assets/images/sidebar/SellCars.png' },
    { selectionText: 'Buy Cars', imageSource: 'assets/images/sidebar/BuyCars.png' },
    { selectionText: 'Services', imageSource: 'assets/images/sidebar/Services.png' },
    { selectionText: 'Calender', imageSource: 'assets/images/sidebar/Calender.png' },
    { selectionText: 'Messages', imageSource: 'assets/images/sidebar/Messages.png' },
  ];
  smallMenuSelections = [
    { selectionText: 'Settings', imageSource: 'assets/images/sidebar/Settings.png' },
    { selectionText: 'Sign Out', imageSource: 'assets/images/sidebar/SignOut.png' },
  ]
}
