import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrdersTableComponent } from './orders-table/orders-table.component';
import { OrdersDialogComponent } from './orders-dialog/orders-dialog.component';
import { OrdersFilterComponent } from './orders-filter/orders-filter.component';
import { OrderService } from './services/orders.service';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ActivePipe } from './helpers/active.pipe';

@NgModule({
  declarations: [
    OrdersComponent,
    OrdersTableComponent,
    OrdersDialogComponent,
    OrdersFilterComponent,
    ActivePipe
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    OrderService
  ]
})
export class OrdersModule { }
