import { Component, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { OperationType } from 'src/app/modules/model/operation-type';
import { ClientDialogComponent } from '../client-dialog/client-dialog.component';
import { ClientsService } from '../services/clients.service';
import { IClient } from '../services/model/client.model';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css']
})
export class ClientsTableComponent {

  private readonly clientService: ClientsService = inject(ClientsService);

 OperationType =OperationType;

  @ViewChild(ClientDialogComponent, { static: true }) ClientDialogComponent!: ClientDialogComponent; 

  @Output() refresh= new EventEmitter<any>();

  @Input() values: IClient[] = [];

  handleOperation(data: IClient, operation:OperationType) {
    switch(operation) {
      case OperationType.EDIT : {
        this.clientService.editClient(data).subscribe(() => {
          this.refresh.emit();
          this.ClientDialogComponent.hideDialog();
        });
        break;
      }

      case OperationType.DELETE : {
        this.clientService.deleteClient(data.id as number).subscribe(() => {
          this.refresh.emit();
        });
        break;
      }
    }
    
  }
}
