import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() menuClickedFromNavbar = new EventEmitter<{ btnClicked: boolean }>();
  constructor() { }

  menuBtnClicked() {
    this.menuClickedFromNavbar.emit({ btnClicked: true });
  }

}
