import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() menuClickedFromNavbar = new EventEmitter<{ btnClicked: boolean }>();
  @Output() carName = new EventEmitter<{ name: string }>();
  constructor() { }

  menuBtnClicked() {
    this.menuClickedFromNavbar.emit({ btnClicked: true });
  }

  onNameSearch(nameEvent: { name: string }) {
    this.carName.emit(nameEvent);
    console.log(nameEvent);
  }

}
