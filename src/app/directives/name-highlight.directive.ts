import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appNameHighlight]'
})
export class NameHighlightDirective implements OnInit {
    @Input() status: string;

    @HostBinding('style.color') textColor: string;

    constructor(private element: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
        if (this.status === 'New') {
            this.textColor = 'blue';
        }
        else if (this.status === 'Used') {
            this.textColor = 'orange'
        }
    }
}