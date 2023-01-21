import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() menuClickedFromNavbar = new EventEmitter<boolean>();
  @Output() carName = new EventEmitter<string>();
  constructor() { }

  menuBtnClicked() {
    this.menuClickedFromNavbar.emit(true);
  }

  onNameSearch(nameEvent: string) {
    this.carName.emit(nameEvent);
  }

}
