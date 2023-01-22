import { Component, Input } from '@angular/core';

import { Cars } from './cars.model';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent {
  @Input() carName: string;

  name: string;
  carStatus: string;
  carType: string;

  constructor() {
    this.carName = '';
    this.carStatus = 'All';
    this.carType = 'All';
  }

  cars = Cars;

  getFilterSpecs(specs: { status: string, type: string }) {
    this.carStatus = specs.status;
    this.carType = specs.type;
  }
}
