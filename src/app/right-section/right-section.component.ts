import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.scss']
})
export class RightSectionComponent {
  @Output() btnClickedFromSection = new EventEmitter<{ btnClicked: boolean }>();

  onMenuClicked(buttonClicked: { btnClicked: boolean }) {
    this.btnClickedFromSection.emit(buttonClicked);
  }
}
