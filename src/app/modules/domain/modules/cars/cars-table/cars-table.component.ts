import { Component, EventEmitter, inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { OperationType } from 'src/app/modules/model/operation-type';
import { OrderService } from '../../orders/services/orders.service';
import { CarsDialogComponent } from '../cars-dialog/cars-dialog.component';
import { CarService } from '../services/cars.service';
import { ICar, ICarTable } from '../services/model/car.model';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.css']
})
export class CarsTableComponent {

  private readonly carService: CarService = inject(CarService);
  private readonly orderService: OrderService = inject(OrderService);

  OperationType = OperationType;

  @ViewChild(CarsDialogComponent, { static: true }) carsDialogComponent!: CarsDialogComponent; 

  @Output() refresh= new EventEmitter<any>();


  @Input() values: ICar[] = [];


  handleOperation(data: ICar, operation: OperationType) {
    switch(operation) {
      case OperationType.EDIT : {
        this.carService.editCar(data).subscribe(() => {
          this.refresh.emit();
          this.carsDialogComponent.hideDialog();
        });
        break;
      }

      case OperationType.DELETE : {
        this.carService.deleteCar(data.id as number).subscribe(() => {
          this.refresh.emit();
        });
        break;
      }
    }
    
  }
}
