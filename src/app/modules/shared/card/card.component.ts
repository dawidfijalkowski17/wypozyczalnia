import { Component, Input } from '@angular/core';
import { ICar } from '../../domain/modules/cars/services/model/car.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() car!: ICar;

}
