import { FormGroup, FormControl } from "@angular/forms";
import { LoginFormFields } from "./login-form-field";

export type LoginFormGroup = FormGroup<{
    [LoginFormFields.LOGIN]: FormControl<string>,
    [LoginFormFields.PASSWORD]: FormControl<string>,
  }>;