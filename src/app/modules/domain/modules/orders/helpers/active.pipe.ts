import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'active'})
export class ActivePipe implements PipeTransform {
    transform(value: number) {
        return value ? 'TAK' : 'NIE';
    }
}