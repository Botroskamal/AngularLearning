import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

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

    constructor(private router: Router) {
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

    onChoosePage() {
        this.router.navigate([`/${this.inText.toLowerCase()}`]);
    }
}
