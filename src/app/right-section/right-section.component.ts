import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.scss']
})
export class RightSectionComponent {
  @Output() btnClickedFromSection = new EventEmitter<boolean>();
  carName: string;

  constructor() {
    this.carName = '';
  }

  onMenuClicked(buttonClicked: boolean) {
    this.btnClickedFromSection.emit(buttonClicked);
  }

  getCarName(carName: string) {
    this.carName = carName;
  }
}
