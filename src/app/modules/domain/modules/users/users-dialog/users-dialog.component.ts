import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../login/typings/user';

@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
  styleUrls: ['./users-dialog.component.css']
})
export class UsersDialogComponent {

  @Input() header: string = ''

  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  
  display: boolean = false;
  form!: FormGroup;

  userId!: number;

  constructor() {
    this._createForm();
  }

  @Output() handleOperation = new EventEmitter<User>();
  
  showDialog(value?: User) {
    if(value){
      this.userId = value.id as number;
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
      this.handleOperation.emit( this.userId ? ({ id: this.userId, ...this.form.value }) : this.form.value);
  }

  private _createForm() {
    this.form = this.formBuilder.group({
      firstname: [],
      lastName: [],
      email: []
    })
  }

}

