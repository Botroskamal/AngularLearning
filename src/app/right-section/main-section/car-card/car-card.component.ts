import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent {
  @Input() carData: {
    manufacturer: string,
    status: string,
    name: string,
    carBody: string,
    seatsNum: string,
    carTranSys: string,
    carPrice: string,
    img: string
  };

  constructor() {
    this.carData = {
      manufacturer: '',
      status: '',
      name: '',
      carBody: '',
      seatsNum: '',
      carTranSys: '',
      carPrice: '',
      img: '',
    };
  }
}
