import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  car = {
    name: 'Audi',
    model: 'A3',
    engine: '2.0',
    color: 'Czerowny',
    gearbox: Option.YES,
    type: CarType.BUS,
    price: 2000
  }

}

export enum Option {
  YES = "YES",
  NO = "NO"
}

export enum CarType {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
  BUS = "BUS"
}
