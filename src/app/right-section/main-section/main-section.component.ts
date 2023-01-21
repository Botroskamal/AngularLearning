import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';

import { Cars } from './cars.model';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements AfterViewInit {
  @Input() carName: string;
  @ViewChild('inputRef', { static: true }) inputRef: ElementRef;
  name: string;
  carStatus: string;
  carType: string;

  constructor() {
    this.carName = '';
    this.carStatus = 'All';
    this.carType = 'All';
  }

  ngAfterViewInit(): void {
    this.name = this.inputRef.nativeElement.value;
  }

  cars = Cars;

  getStatus(status: string) {
    this.carStatus = status;
    console.log(this.carStatus);
  }
  getType(type: string) {
    this.carType = type;
    console.log(this.carType);
  }
}
