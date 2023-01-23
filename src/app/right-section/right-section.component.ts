import { Component, EventEmitter, Output } from '@angular/core';
import { searchService } from '../services/search.service';

@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.scss']
})
export class RightSectionComponent {
  constructor(private searchService: searchService) { }
}
