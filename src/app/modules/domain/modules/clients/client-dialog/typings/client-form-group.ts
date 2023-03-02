import { FormGroup, FormControl } from "@angular/forms";
import { ClientFormFields } from "./client-form-field";

export type ClientFormGroup = FormGroup<{
    [ClientFormFields.FIRSTNAME]: FormControl<string>,
    [ClientFormFields.SURNAME]: FormControl<string>,
    [ClientFormFields.DRIVER_LICENSE_NUMBER]: FormControl<string>,
    [ClientFormFields.AGE]: FormControl<number>,
    [ClientFormFields.HOUSE_NUMBER]: FormControl<string>,
    [ClientFormFields.APARTMENT_NUMBER]: FormControl<string>,
    [ClientFormFields.CITY]: FormControl<string>,
    [ClientFormFields.POST_CODE]: FormControl<string>,
    [ClientFormFields.STREET]: FormControl<string>,
}>;