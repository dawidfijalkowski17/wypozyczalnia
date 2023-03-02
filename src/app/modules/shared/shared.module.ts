import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator/paginator.component';
import { CardComponent } from './card/card.component';
import { InputComponent } from './input/input.component';
import { NgprimeModule } from './ngprime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberComponent } from './input-number/input-number.component';
import { DropDownComponent } from './drop-down/drop-down.component';

@NgModule({
  declarations: [
    PaginatorComponent,
    CardComponent,
    InputComponent,
    InputNumberComponent,
    DropDownComponent
  ],
  imports: [
    CommonModule,
    NgprimeModule
  ],
  exports: [
    PaginatorComponent,
    CardComponent,
    InputComponent,
    NgprimeModule,
    ReactiveFormsModule,
    FormsModule,
    InputNumberComponent,
    DropDownComponent
  ]
})
export class SharedModule { }
