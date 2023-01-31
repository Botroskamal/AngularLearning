import { Component, HostListener, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ButtonService } from "../services/button.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
    selectionTitles: string[];
    getScreenWidth: any;
    getScreenHeight: any;
    btnClicked: boolean = false;
    buttonSubscription: Subscription;

    constructor(private buttonService: ButtonService) {
        this.selectionTitles = ['Dashboard', 'Assets', 'Booking', 'Sell Cars', 'But Cars', 'Services', 'Calender', 'Messages', 'Settings', 'Sign out'];
        this.buttonSubscription = this.buttonService.buttonClicked.subscribe(
            (isClicked: boolean) => { this.btnClicked = isClicked }
        )
    }

    ngOnInit(): void {
        this.getScreenWidth = window.innerWidth;
        this.getScreenHeight = window.innerHeight;
    }

    @HostListener('window:resize', ['$event'])
    onWindowResize() {
        this.getScreenWidth = window.innerWidth;
        this.getScreenHeight = window.innerHeight;
    }

    ngOnDestroy(): void {
        this.buttonSubscription.unsubscribe();
    }
}