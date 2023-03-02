import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputNumberComponent),
    }
  ]
})
export class InputNumberComponent implements ControlValueAccessor  {

  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() labelName: string = '';

  value!: number;

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