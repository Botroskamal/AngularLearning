import { Component, Input } from '@angular/core';

import { Cars } from './cars.model';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent {
  @Input() carName: string;

  constructor() {
    this.carName = '';
  }

  cars = Cars;
}
