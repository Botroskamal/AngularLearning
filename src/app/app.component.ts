import { Component, HostListener, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ButtonService } from './services/button.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
    title = 'AngularLearning';
    selectionTitles: string[];
    btnClicked: boolean = false;
    buttonSubscription: Subscription;

    constructor(private buttonService: ButtonService) {
        this.selectionTitles = ['Dashboard', 'Assets', 'Booking', 'Sell Cars', 'But Cars', 'Services', 'Calender', 'Messages', 'Settings', 'Sign out'];
        this.buttonSubscription = this.buttonService.buttonClicked.subscribe(
            (isClicked: boolean) => { this.btnClicked = isClicked }
        )
    }

    ngOnDestroy(): void {
        this.buttonSubscription.unsubscribe();
    }
}
