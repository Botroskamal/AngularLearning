import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
    //now we will add the ability of specifing the color from outside
    // we will use custom propert binding (ps. we can use custom event binding also in durectives)
    @Input() defaultColor: string = 'transparent';
    @Input() highlightColor: string = 'red';

    //another way to set style without using renderer
    @HostBinding('style.background') backgroundColor: string;

    constructor(private element: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
        // this.renderer.setStyle(this.element.nativeElement, 'background', 'orange');
        // this.backgroundColor = 'orange'; // hostBinding way
        this.backgroundColor = this.defaultColor; // we initialize here to ensure to have the value
        // provided by user from template before anything has been rendered
    }

    //we need to react to events ocurring in the element where we use our directive
    @HostListener('mouseeneter') mouseOver(eventData: Event) {
        // this.renderer.setStyle(this.element.nativeElement, 'background', 'blue');
        // this.backgroundColor = 'blue'; // hostBinding way
        this.backgroundColor = this.highlightColor; // using custom propert binding
    }

    @HostListener('mouseleave') mouseLeave(eventData: Event) {
        // this.renderer.setStyle(this.element.nativeElement, 'background', 'orange');
        // this.backgroundColor = 'orange'; // hostBinding way
        this.backgroundColor = this.defaultColor; //using custom property binding
    }
}

/**
 * <p appBetterHighlight [defaultColor]="'grey'" [highlightColor]="'green'"> </p>
 * 
 * <p appBetterHighlight [defaultColor]="'grey'" highlightColor="green"> </p>
 */