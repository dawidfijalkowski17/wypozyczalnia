import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { SharedModule } from "../../../shared/shared.module";
import { CarService } from './services/cars.service';
import { CarsTableComponent } from './cars-table/cars-table.component';
import { CarsDialogComponent } from './cars-dialog/cars-dialog.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        CarsComponent,
        CarsTableComponent,
        CarsDialogComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        TranslateModule
    ],
    providers: [
      CarService
    ]
})
export class CarsModule { }
