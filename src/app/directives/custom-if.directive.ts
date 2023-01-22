import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appCustomIf]'
})
export class CustomIfDirective {
    @Input() set appCustomIf(condition: boolean) {
        if (condition) {
            this.viewContainer.createEmbeddedView(this.template);
        } else {
            this.viewContainer.clear();
        }
    }

    constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) { }
}

/**
    <div class="cardsSection">
        <ng-container *ngFor="let car of cars">
            <app-car-card *appCustomIf="5 > 7"></app-car-card>
        </ng-container>
    </div>
 */