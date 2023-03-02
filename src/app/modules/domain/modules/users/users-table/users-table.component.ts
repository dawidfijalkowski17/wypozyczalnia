import { Component, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { OperationType } from 'src/app/modules/model/operation-type';
import { User } from '../../login/typings/user';
import { UserService } from '../services/user-service.service';
import { UsersDialogComponent } from '../users-dialog/users-dialog.component';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent {

  private readonly userService: UserService = inject(UserService);

  @ViewChild(UsersDialogComponent, { static: true}) userDialogComponent!: UsersDialogComponent;

  @Output() refresh= new EventEmitter<any>();

  @Input() values: User[] = [];

  OperationType = OperationType;


  handleOperation(data: User, operation: OperationType) {
    switch(operation) {
      case OperationType.EDIT : {
        this.userService.editUser(data).subscribe(() => {
          this.refresh.emit();
          this.userDialogComponent.hideDialog();
        });
        break;
      }

      case OperationType.DELETE : {
        this.userService.deleteUser(data.id as number).subscribe(() => {
          this.refresh.emit();
        });
        break;
      }
    }
    
  }
}
