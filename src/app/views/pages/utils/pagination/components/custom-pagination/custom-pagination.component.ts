import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Page } from '../../page';

@Component({
  selector: 'kt-custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.scss']
})
export class CustomPaginationComponent implements OnInit {

  @Input() page: Page<any>;
  @Output() nextPageEvent = new EventEmitter();
  @Output() previousPageEvent = new EventEmitter();
  @Output() pageSizeEvent: EventEmitter<number> = new EventEmitter<number>();
  pageSize: string;

  constructor() { }

  ngOnInit() {
    this.pageSize = "10";
  }

  nextPage(): void {
    this.nextPageEvent.emit(null);
  }

  previousPage(): void {
    this.previousPageEvent.emit(null);
  }
  /*
  updatePageSize(pageSize: number): void {
    this.pageSizeEvent.emit(pageSize);
  }
  */

  change(event: any) {
    this.pageSize = event.source.value;
    this.pageSizeEvent.emit(parseInt(this.pageSize));
  }

}
