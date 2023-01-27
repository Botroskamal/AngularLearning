import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { AccountsService } from '../services/accounts.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    @Input() formType: string;

    form: FormGroup;

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

    ngOnInit(): void {
        this.form = new FormGroup({
            'first name': new FormControl(null),
            'last name': new FormControl(null),
            'email': new FormControl(null),
            'password': new FormControl(null),
            'confirm password': new FormControl(null),
            'gender': new FormControl(null),
            'age': new FormControl(null)
        });
    }

    onSubmit() {
        console.log(this.form);
        // this.acountService.addAccount({
        //     id: 1,
        //     firstName: this.firstName,
        //     lastName: this.lastName,
        //     email: this.email,
        //     password: this.password,
        //     gender: this.gender,
        //     age: this.age
        // })
    }
}
