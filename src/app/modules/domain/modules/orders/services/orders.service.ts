import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponse } from 'src/app/modules/model/response.model';
import { IOrder } from './model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
private readonly httpClient: HttpClient = inject(HttpClient);

    public getOrders(request: any): Observable<IResponse<IOrder>> {
        return this.httpClient.get<IResponse<IOrder>>('https://api-carrental.nightly.conpeek.com/order');
    }

    // public deleteClient(clientId: number): Observable<void> {
    //     return this.httpClient.delete<void>(`https://api-carrental.nightly.conpeek.com/client/${clientId}`);
    // }

    public addOrder(order: IOrder): Observable<void> {
        return this.httpClient.post<void>(`https://api-carrental.nightly.conpeek.com/order`, order);
    }

    // public editClient(client: IClient): Observable<void> {
    //     console.log(client);
    //     return this.httpClient.put<void>(`https://api-carrental.nightly.conpeek.com/client/${client.id}`, client);
    // }
}
