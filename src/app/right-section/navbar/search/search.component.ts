import { Component, EventEmitter, Output } from '@angular/core';
import { searchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  inputValue: string;

  constructor(private searchService: searchService) {
    this.inputValue = '';
    this.searchService.valueUpdated.emit('');
  }

  onTyping(event: Event) {
    this.searchService.valueUpdated.emit(this.inputValue);
  }
}
