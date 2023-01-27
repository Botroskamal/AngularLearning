import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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
            'first name': new FormControl(null, Validators.required),
            'last name': new FormControl(null, Validators.required),
            'email': new FormControl(null, [Validators.required, Validators.email]),
            // 'password': new FormControl(null, [Validators.required, this.passwordValidation.bind(this)]),
            'password': new FormControl(null, Validators.required),
            'confirm password': new FormControl(null, Validators.required),
            'gender': new FormControl(null, Validators.required),
            'age': new FormControl(null, [Validators.required, this.ageValidation.bind(this)])
        });
    }

    // passwordValidation(control: FormControl): {} {
    //     const oneUpperCase = /(?=.*?[A-Z])/;
    //     const oneLowerCase = /(?=.*?[a-z])/;
    //     const oneDigit = /(?=.*?[0-9])/;
    //     const specialChar = /(?=.*?[#?!@$%^&*-])/;
    //     const minEight = /.{8,}/;
    //     let errors: {} = {};
    //     if (!oneUpperCase.test(control.value)) {
    //         errors = { ...errors, 'noUpperCase': true }
    //     }
    //     if (!oneLowerCase.test(control.value)) {
    //         errors = { ...errors, 'noLowerCase': true }
    //     }
    //     if (!oneDigit.test(control.value)) {
    //         errors = { ...errors, 'noDigit': true }
    //     }
    //     if (!specialChar.test(control.value)) {
    //         errors = { ...errors, 'noSpecialChar': true }
    //     }
    //     if (!minEight.test(control.value)) {
    //         errors = { ...errors, 'lessThanEight': true }
    //     }
    //     return errors;
    // }

    ageValidation(control: FormControl): { [s: string]: boolean } {
        if (control.value <= 16 && control.value !== null && control.value !== "") {
            return { 'ageIsForbidden': true }
        }
        return null;
    }

    onSubmit() {
        console.log(this.form.controls);
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
