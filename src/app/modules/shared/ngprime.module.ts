import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {PaginatorModule} from 'primeng/paginator';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MenubarModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    CardModule,
    PaginatorModule,
    BrowserAnimationsModule,
    TableModule,
    DialogModule,
    DropdownModule,
    CalendarModule
  ],
})
export class NgprimeModule { }
