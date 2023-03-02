import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {

  @Input() rows: number = 0;
  @Input() totalRecords: number = 0;
  @Input() pageSize: number = 10;

}
