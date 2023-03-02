import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from '../../domain/modules/cars/cars.component';
import { HomeComponent } from '../../domain/modules/home/home.component';
import { LoginComponent } from '../../domain/modules/login/login.component';
import { LoginModule } from '../../domain/modules/login/login.module';
import { CarsModule } from '../../domain/modules/cars/cars.module';
import { HomeModule } from '../../domain/modules/home/home.module';
import { ClientsModule } from '../../domain/modules/clients/clients.module';
import { SharedModule } from 'primeng-lts/api';
import { OrdersModule } from '../../domain/modules/orders/orders.module';
import { UsersModule } from '../../domain/modules/users/users.module';
import { ClientsComponent } from '../../domain/modules/clients/clients.component';
import { OrdersComponent } from '../../domain/modules/orders/orders.component';
import { UsersComponent } from '../../domain/modules/users/users.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, canMatch: [] },
  { path: 'cars', component: CarsComponent },
  { path: 'clients', component: ClientsComponent , canActivate: [AuthGuardService]},
  { path: 'orders', component: OrdersComponent , canActivate: [AuthGuardService]},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule { }
