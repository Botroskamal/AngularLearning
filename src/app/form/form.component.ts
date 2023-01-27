import { Component, Input, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { AccountsService } from '../services/accounts.service';

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

    errorMessage: string;

    constructor(private acountService: AccountsService) {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.confirmedPassword = '';
        this.gender = '';
        this.errorMessage = 'please enter your ';
    }

    onSubmit() {
        this.acountService.addAccount({
            id: 1,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            gender: this.gender,
            age: this.age
        })
    }
}
