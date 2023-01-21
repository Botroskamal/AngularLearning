import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  inputValue: string;
  @Output() carName = new EventEmitter<string>();

  constructor() {
    this.inputValue = '';
  }

  onTyping(event: Event) {
    this.carName.emit(this.inputValue);
  }
}
