import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { IResponse } from 'src/app/modules/model/response.model';
import { User } from '../login/typings/user';
import { UserService } from './services/user-service.service';
import { UsersDialogComponent } from './users-dialog/users-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private readonly userService: UserService = inject(UserService);

  @ViewChild(UsersDialogComponent, { static: true}) userDialogComponent!: UsersDialogComponent;

  values: User[] = [];

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.userService.getUser({}).subscribe((res: IResponse<User>) => {
      this.values = res.data;
    })
  }


  public add(user: User) {
    this.userService.addUser(user).subscribe(() => {
      this.loadData();
      this.userDialogComponent.hideDialog();
    });
  }

}
