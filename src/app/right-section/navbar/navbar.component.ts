import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonService } from 'src/app/services/button.service';
import { searchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private searchService: searchService, private buttonService: ButtonService) { }

  menuBtnClicked() {
    this.buttonService.buttonClicked.emit(true);
  }
}
