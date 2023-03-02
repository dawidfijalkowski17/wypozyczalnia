import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
import { LoginFormFields } from './typings/login-form-field';
import { LoginFormGroup } from './typings/login-form-group';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
private readonly formBuilder: NonNullableFormBuilder = inject(NonNullableFormBuilder);
private readonly loginService: AuthenticationService = inject(AuthenticationService);

public readonly loginFormFields: typeof LoginFormFields = LoginFormFields;

public loginForm: LoginFormGroup = this.formBuilder.group({
  [LoginFormFields.LOGIN]: this.formBuilder.control('dawidfijalkowski17@gmail.com'),
  [LoginFormFields.PASSWORD]: this.formBuilder.control('Alamakota123')
});

  public onSubmit(): void {
    this.loginService.login(this.loginForm.value);
  }
}
