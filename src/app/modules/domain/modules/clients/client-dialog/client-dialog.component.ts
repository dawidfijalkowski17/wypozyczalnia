import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { ClientsService } from '../services/clients.service';
import { IClient } from '../services/model/client.model';
import { ClientFormFields } from './typings/client-form-field';
import { ClientFormGroup } from './typings/client-form-group';

@Component({
  selector: 'app-client-dialog',
  templateUrl: './client-dialog.component.html',
  styleUrls: ['./client-dialog.component.css']
})
export class ClientDialogComponent {

  private readonly clientService: ClientsService = inject(ClientsService);

  private readonly formBuilder: NonNullableFormBuilder = inject(NonNullableFormBuilder);
  public readonly formFields: typeof ClientFormFields = ClientFormFields;

  clientId!: number | undefined;

  @Input() header: string = '';

  @Output() handleOperation = new EventEmitter<IClient>();

  display: boolean = false;

  public form: ClientFormGroup = this.formBuilder.group({
    [ClientFormFields.FIRSTNAME]: this.formBuilder.control(''),
    [ClientFormFields.SURNAME]: this.formBuilder.control(''),
    [ClientFormFields.DRIVER_LICENSE_NUMBER]: this.formBuilder.control(''),
    [ClientFormFields.AGE]: this.formBuilder.control(0),
    [ClientFormFields.HOUSE_NUMBER]: this.formBuilder.control(''),
    [ClientFormFields.APARTMENT_NUMBER]: this.formBuilder.control(''),
    [ClientFormFields.CITY]: this.formBuilder.control(''),
    [ClientFormFields.POST_CODE]: this.formBuilder.control(''),
    [ClientFormFields.STREET]: this.formBuilder.control(''),
  });


    showDialog(value?: IClient) {
        if(value){
          this.clientId = value.id;
          this.form.patchValue(value);
        } else {
          this.form.reset();
        }
        this.display = true;
    }

    hideDialog() {
        this.display = false;
    }

    save() {
        this.handleOperation.emit( (this.clientId ? ({ id: this.clientId, ...this.form.value}) : this.form.value) as IClient);
    }

}
