import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IOrder } from '../services/model/order.model';
import { OrderService } from '../services/orders.service';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent {

  private readonly ordersService: OrderService = inject(OrderService);

  @Input() values: IOrder[] = [];

  @Output() refresh= new EventEmitter<any>();


  handleOperation(data: any, operation: any) {
    
  }

}
