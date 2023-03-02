import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { IResponse } from 'src/app/modules/model/response.model';
import { ClientDialogComponent } from './client-dialog/client-dialog.component';
import { ClientsService } from './services/clients.service';
import { IClient } from './services/model/client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  
  private readonly clientService: ClientsService = inject(ClientsService);

  @ViewChild(ClientDialogComponent, { static: true}) clientDialogComponent!: ClientDialogComponent;

  clientValues: IClient[] = [];
  
  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    this.clientService.getClients({}).subscribe((res: IResponse<IClient>) => {
      this.clientValues = res.data;
    })
  }

  public add(client: IClient) {
    this.clientService.addClient(client).subscribe(() => {
      this.loadData();
      this.clientDialogComponent.hideDialog();
    });
  }

}
