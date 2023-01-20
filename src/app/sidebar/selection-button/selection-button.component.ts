import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selection-button',
  templateUrl: './selection-button.component.html',
  styleUrls: ['./selection-button.component.scss']
})
export class SelectionButtonComponent {
  @Input() selectionData: { selectionText: string, imageSource: string };

  constructor() {
    this.selectionData = { selectionText: '', imageSource: '' };
  }
}
