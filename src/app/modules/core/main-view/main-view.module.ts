import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view.component';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [
    MainViewComponent
  ],
  imports: [
    CommonModule,
    MenuModule
  ],
  exports: [
    MainViewComponent
  ]
})
export class MainViewModule { }
