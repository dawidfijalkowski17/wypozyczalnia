import { Component, forwardRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent),
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() labelName: string = '';

  value: any;

  constructor() { }

  onChange: any = () => {}
  onTouch: any = () => {}

  writeValue(value: any){
    this.value = value
  }

  changeValue(event: any) {
    this.onChange(event);
  }

  registerOnChange(fn: any){
    this.onChange = fn
  }

  registerOnTouched(onTouched: Function) {
    this.onTouch = onTouched;
  }
}
