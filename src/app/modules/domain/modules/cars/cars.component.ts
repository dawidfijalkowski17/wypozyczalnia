import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { IResponse } from 'src/app/modules/model/response.model';
import { CarsDialogComponent } from './cars-dialog/cars-dialog.component';
import { CarService } from './services/cars.service';
import { ICar } from './services/model/car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  private readonly carService: CarService = inject(CarService);

  @ViewChild(CarsDialogComponent, { static: true}) carsDialogComponent!: CarsDialogComponent;

  values: ICar[] = [];

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.carService.getCar({}).subscribe((res: IResponse<ICar>) => {
      this.values = res.data;
    })
  }

  public add(car: ICar) {
    this.carService.addCar(car).subscribe(() => {
      this.loadData();
      this.carsDialogComponent.hideDialog();
    });
  }
}
