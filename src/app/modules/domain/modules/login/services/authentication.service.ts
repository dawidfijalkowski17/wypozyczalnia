import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import { User } from '../typings/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
private readonly httpClient: HttpClient = inject(HttpClient);
private user!: User;

public login(loginForm: any): void {
  this.httpClient.post('https://api-carrental.nightly.conpeek.com/user/login', { login: loginForm.login })
  .subscribe((response: any) => {
    this.properLogin(loginForm, response.nonce);
  });
}

public logout(): void {
  this.httpClient.post('https://api-carrental.nightly.conpeek.com/user/logout', { login: localStorage.getItem('email') })
  .subscribe((response: any) => {
    console.log(response)
  });
}

  public isAuthenticated() : boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

private properLogin(loginForm: any, nonce: string){
  this.hash(loginForm.password).then(hash => {
    this.hash(hash + nonce).then(hashPassword => {
      loginForm.password = hashPassword;
      this.httpClient.post('https://api-carrental.nightly.conpeek.com/user/login', loginForm)
      .subscribe((response: any) => {
        console.log(response)
        if (response.success) {
          this.user = response.user_data;
          localStorage.setItem('token', response.token);
          localStorage.setItem('email', this.user.email);
          window.location.href = '/cars';
        } else {
          localStorage.setItem('token', '');
        }
      });
    })
  });

}

private async hash(string: string) {
  const utf8 = new TextEncoder().encode(string);
  const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((bytes) => bytes.toString(16).padStart(2, '0'))
    .join('');
  return hashHex;
}
}
