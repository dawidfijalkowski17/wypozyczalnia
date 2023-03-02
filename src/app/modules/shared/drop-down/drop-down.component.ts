import { Component, forwardRef, inject, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DropDownComponent),
    }
  ]
})
export class DropDownComponent implements ControlValueAccessor{

  @Input() options: any;
  @Input() optionLabel: string = 'name';
  @Input() placeholder: string = '';
  @Input() labelName: string = '';
  selectedValue: any;

  onChange: any = () => {}
  onTouch: any = () => {}


  writeValue(value: any){
   if(value) {
    this.selectedValue = value;
   } else {
    this.selectedValue = null;
   }
  }

  changeValue(event: any) {
    this.onChange(event);
  }

  changeSelectedOption(option: any) {
    this.selectedValue = option.value;
    this.onChange(option.value);
  }

  registerOnChange(fn: any){
    this.onChange = fn
  }

  registerOnTouched(onTouched: Function) {
    this.onTouch = onTouched;
    console.log(1)
  }
}
