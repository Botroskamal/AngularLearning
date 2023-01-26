import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent {
    @Input() formType: string;
    @ViewChild('f') form: NgForm;

    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmedPassword: string;
    gender: string;
    age: number;

    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.confirmedPassword = '';
        this.gender = '';
    }
}
