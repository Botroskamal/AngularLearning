import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-selection-button',
  templateUrl: './selection-button.component.html',
  styleUrls: ['./selection-button.component.scss']
})
export class SelectionButtonComponent implements AfterViewInit {
  @Input() selectionData: { selectionText: string, imageSource: string };
  @ViewChild('textRef', { static: true }) textRef: ElementRef;
  @Output() clickedText = new EventEmitter<string>;
  @Input() otherClicked: string;

  chosenText: string;
  inText: string;

  constructor() {
    this.selectionData = { selectionText: '', imageSource: '' };
    this.inText = '';
    this.chosenText = '';
    this.otherClicked = '';
  }

  ngAfterViewInit(): void {
    this.inText = this.textRef.nativeElement.innerText;
  }

  getInnerText(event: Event) {
    this.chosenText = this.inText;
    this.clickedText.emit(this.chosenText);
  }
}
