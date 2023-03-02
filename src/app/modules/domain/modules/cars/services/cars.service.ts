import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICar } from './model/car.model';
import { IResponse } from 'src/app/modules/model/response.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
private readonly httpClient: HttpClient = inject(HttpClient);

    public getCar(request: any): Observable<IResponse<ICar>> {
        return this.httpClient.get<IResponse<ICar>>('https://api-carrental.nightly.conpeek.com/car');
    }

    public deleteCar(carId: number): Observable<void> {
      return this.httpClient.delete<void>(`https://api-carrental.nightly.conpeek.com/car/${carId}`);
  }

    public addCar(car: ICar): Observable<void> {
        return this.httpClient.post<void>(`https://api-carrental.nightly.conpeek.com/car`, car);
    }

    public editCar(car: ICar): Observable<void> {
        console.log(car)
        return this.httpClient.put<void>(`https://api-carrental.nightly.conpeek.com/car/${car.id}`, car);
    }

    private _createParams() {

    }
}
