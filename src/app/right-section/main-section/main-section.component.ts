import { Component, Input } from '@angular/core';
import { searchService } from 'src/app/services/search.service';

import { Cars } from './cars.model';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent {
  searchValue: string;
  carStatus: string;
  carType: string;

  constructor(private searchService: searchService) {
    this.carStatus = 'All';
    this.carType = 'All';
    this.searchService.valueUpdated.subscribe(
      (value: string) => { this.searchValue = value }
    )
  }

  cars = Cars;

  getFilterSpecs(specs: { status: string, type: string }) {
    this.carStatus = specs.status;
    this.carType = specs.type;
  }
}
