import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { UsersDialogComponent } from './users-dialog/users-dialog.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { UserService } from './services/user-service.service';



@NgModule({
  declarations: [
    UsersComponent,
    UsersTableComponent,
    UsersDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
