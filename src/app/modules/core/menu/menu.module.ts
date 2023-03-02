import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule,
  ],
  exports: [
    MenuComponent,
    MenuRoutingModule
  ],
  providers: [
    AuthGuardService
  ]
})
export class MenuModule { }
