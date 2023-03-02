import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { IResponse } from 'src/app/modules/model/response.model';
import { OrdersDialogComponent } from './orders-dialog/orders-dialog.component';
import { IOrder } from './services/model/order.model';
import { OrderService } from './services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  private readonly ordersService: OrderService = inject(OrderService);

  @ViewChild(OrdersDialogComponent, { static: true}) orderDialogService!: OrdersDialogComponent;

  orderValues: any[] = [];

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.ordersService.getOrders({}).subscribe((res: IResponse<IOrder>) => {
      this.orderValues = res.data;
    })
  }

  public add(order: IOrder) {
    this.ordersService.addOrder(order).subscribe(() => {
      this.loadData();
      this.orderDialogService.hideDialog();
    });
  }
}
