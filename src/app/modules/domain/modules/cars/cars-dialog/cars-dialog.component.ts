import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { mapEnumToArray } from 'src/app/helpers/enum-mapper';
import { CarType, GearboxType, ICar } from '../services/model/car.model';

@Component({
  selector: 'app-cars-dialog',
  templateUrl: './cars-dialog.component.html',
  styleUrls: ['./cars-dialog.component.css']
})
export class CarsDialogComponent {

  gearboxTypeOptions =  mapEnumToArray(GearboxType);
  carType = mapEnumToArray(CarType);

  carId!: number | undefined;

  @Input() header: string = ''

  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  
  display: boolean = false;
  form!: FormGroup;

  constructor() {
    this._createForm();
  }

  @Output() handleOperation = new EventEmitter<ICar>();
  
  showDialog(value?: ICar) {
    if(value){
      this.carId = value.id;
      this.form.patchValue(value);
    } else {
      this.form.reset();
    }
    this.display = true;
  }

  hideDialog() {
      this.display = false;
  }

  save() {
      this.handleOperation.emit( this.carId ? ({ id: this.carId, ...this.form.value }) : this.form.value);
  }

  private _createForm() {
    this.form = this.formBuilder.group({
      mark: [],
      model: [],
      engine_capacity: [],
      color: [],
      gearbox_type: [],
      type: [],
      price_per_day:[]
    })
  }

}
