import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponse } from 'src/app/modules/model/response.model';
import { User } from '../../login/typings/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private readonly httpClient: HttpClient = inject(HttpClient);

    public getUser(request: any): Observable<IResponse<User>> {
        return this.httpClient.get<IResponse<User>>('https://api-carrental.nightly.conpeek.com/user');
    }

    public deleteUser(userId: number): Observable<void> {
      return this.httpClient.delete<void>(`https://api-carrental.nightly.conpeek.com/user/${userId}`);
  }

    public addUser(user: User): Observable<void> {
        return this.httpClient.post<void>(`https://api-carrental.nightly.conpeek.com/user`, user);
    }

    public editUser(user: User): Observable<void> {
        return this.httpClient.put<void>(`https://api-carrental.nightly.conpeek.com/user/${user.id}`, user);
    }
}
