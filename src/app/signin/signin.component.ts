import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements AfterViewInit, AfterViewChecked, DoCheck, OnChanges {
    @ViewChild('f') form: NgForm;

    constructor(private router: Router) { }

    ngAfterViewInit(): void {
        //console.log(this.form);
    }

    ngAfterViewChecked(): void {

    }

    ngDoCheck(): void {
        console.log("ooooooooooooooooooooooooo")
        console.log(this.form);
    }

    ngOnChanges(changes: SimpleChanges): void {

    }

    onSignIn() {
        this.router.navigate(['/']);
    }
}
