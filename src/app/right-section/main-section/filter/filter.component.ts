import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() filterSpecs = new EventEmitter<{ status: string, type: string }>();

  @ViewChild('statusSelect', { static: true }) statusSelect: ElementRef;
  @ViewChild('typeSelect', { static: true }) typeSelect: ElementRef;

  radioBtnValue: string = 'All';

  constructor() {
  }

  onChangeFilter(event: Event) {
    // this.filterSpecs.emit({ status: this.statusSelect.nativeElement.value, type: this.typeSelect.nativeElement.value })
    this.filterSpecs.emit({ status: this.radioBtnValue, type: this.typeSelect.nativeElement.value });
  }

  onChangeRadio(event: Event) {
    this.radioBtnValue = (<HTMLInputElement>event.target).value;
    this.onChangeFilter(event);
  }
}
