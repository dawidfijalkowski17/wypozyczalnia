import { formatDate } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { mapEnumToArray } from 'src/app/helpers/enum-mapper';
import { Option } from 'src/app/modules/model/option.model';
import { CarType, GearboxType } from '../../cars/services/model/car.model';
import { IOrder } from '../services/model/order.model';
import { OrderService } from '../services/orders.service';

@Component({
  selector: 'app-orders-dialog',
  templateUrl: './orders-dialog.component.html',
  styleUrls: ['./orders-dialog.component.css']
})
export class OrdersDialogComponent {

  private readonly orderService: OrderService = inject(OrderService);
  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  gearboxTypeOptions =  mapEnumToArray(GearboxType);
  carType = mapEnumToArray(CarType);
  options = mapEnumToArray(Option);

  @Output() handleOperation = new EventEmitter<IOrder>();

  constructor() {
    this._createForm();
  }

  display: boolean = false;

  public form!: FormGroup;

    showDialog(value?: IOrder) {
        if(value){
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
        this.handleOperation.emit(this.form.value as IOrder);
    }
    private _createForm() {
      this.form = this.formBuilder.group({
        car_color: [],
        car_engine_capacity: [],
        car_gearbox_type: [],
        car_id: [],
        car_mark: [],
        car_model: [],
        car_type: [],
        client_driver_license_number: [],
        client_firstname: [],
        client_id: [],
        client_surname: [],
        comments: [],
        from_date: [],
        id: [],
        is_additional_insurance: [],
        is_paid: [],
        is_rent: [],
        is_returned: [],
        to_date: [],
        total_price: [],
      })
    }
}
