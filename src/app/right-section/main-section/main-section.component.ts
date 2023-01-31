import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { searchService } from 'src/app/services/search.service';

import { Cars } from './cars.model';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnDestroy {
  searchValue: string;
  carStatus: string;
  carType: string;
  valueSubscription: Subscription;

  constructor(private searchService: searchService) {
    this.carStatus = 'All';
    this.carType = 'All';
    this.valueSubscription = this.searchService.valueUpdated.subscribe(
      (value: string) => { this.searchValue = value }
    )
  }

  cars = Cars;

  getFilterSpecs(specs: { status: string, type: string }) {
    this.carStatus = specs.status;
    this.carType = specs.type;
  }


  ngOnDestroy(): void {
    this.valueSubscription.unsubscribe();
  }
}
