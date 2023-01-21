import { Component, ElementRef, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() status = new EventEmitter<string>();
  @Output() type = new EventEmitter<string>();
  // @ViewChild('statusSelect', { static: true }) statusSelect: ElementRef;
  @ViewChild('typeSelect', { static: true }) typeSelect: ElementRef;

  constructor() {
  }

  onChooseStatus(event: Event) {
    this.status.emit((<HTMLSelectElement>event.target).value);
  }

  onChooseType(event: Event) {
    this.type.emit(this.typeSelect.nativeElement.value);
  }
}
