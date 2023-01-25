import { Component, HostListener } from "@angular/core";
import { ButtonService } from "../services/button.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    selectionTitles: string[];
    getScreenWidth: any;
    getScreenHeight: any;
    btnClicked: boolean = false;

    constructor(private buttonService: ButtonService) {
        this.selectionTitles = ['Dashboard', 'Assets', 'Booking', 'Sell Cars', 'But Cars', 'Services', 'Calender', 'Messages', 'Settings', 'Sign out'];
        this.buttonService.buttonClicked.subscribe(
            (isClicked: boolean) => { this.btnClicked = isClicked }
        )
    }


    @HostListener('window:resize', ['$event'])
    onWindowResize() {
        this.getScreenWidth = window.innerWidth;
        this.getScreenHeight = window.innerHeight;
    }
}