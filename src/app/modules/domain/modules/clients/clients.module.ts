import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { ClientsTableComponent } from './clients-table/clients-table.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ClientsFilterComponent } from './clients-filter/clients-filter.component';
import { ClientsService } from './services/clients.service';
import { ClientDialogComponent } from './client-dialog/client-dialog.component';

@NgModule({
  declarations: [
    ClientsComponent,
    ClientsTableComponent,
    ClientsFilterComponent,
    ClientDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    ClientsService
  ]
})
export class ClientsModule { }
