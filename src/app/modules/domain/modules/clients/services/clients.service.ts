import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IClient } from './model/client.model';
import { IResponse } from 'src/app/modules/model/response.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
private readonly httpClient: HttpClient = inject(HttpClient);

    public getClients(request: any): Observable<IResponse<IClient>> {
        return this.httpClient.get<IResponse<IClient>>('https://api-carrental.nightly.conpeek.com/client');
    }

    public deleteClient(clientId: number): Observable<void> {
        return this.httpClient.delete<void>(`https://api-carrental.nightly.conpeek.com/client/${clientId}`);
    }

    public addClient(client: IClient): Observable<void> {
        return this.httpClient.post<void>(`https://api-carrental.nightly.conpeek.com/client`, client);
    }

    public editClient(client: IClient): Observable<void> {
        console.log(client);
        return this.httpClient.put<void>(`https://api-carrental.nightly.conpeek.com/client/${client.id}`, client);
    }
}
