import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { AccountsService } from '../services/accounts.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    @Input() formType: string;

    form: FormGroup;

    errorMessage: string;
    isActive: boolean = false;
    confirmIsActive: boolean = false;

    constructor(private http: HttpClient, private acountService: AccountsService, private router: Router) {
        this.errorMessage = 'please enter your ';
    }

    ngOnInit(): void {
        this.form = new FormGroup({
            'first name': new FormControl(null, Validators.required),
            'last name': new FormControl(null, Validators.required),
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, [Validators.required, this.passwordValidation.bind(this)]),
            // 'password': new FormControl(null, Validators.required),
            'confirm password': new FormControl(null, [Validators.required, this.confirmPasswordValidation.bind(this)]),
            'gender': new FormControl(null, Validators.required),
            'age': new FormControl(null, [Validators.required, this.ageValidation])
        });
    }

    passwordValidation(control: FormControl): {} {
        const oneUpperCase = /(?=.*?[A-Z])/;
        const oneLowerCase = /(?=.*?[a-z])/;
        const oneDigit = /(?=.*?[0-9])/;
        const specialChar = /(?=.*?[#?!@$%^&*-])/;
        const minEight = /.{8,}/;
        let errors: {} = {};
        if (!oneUpperCase.test(control.value) && control.value !== "" && control.value !== null) {
            errors = { ...errors, 'noUpperCase': true }
        }
        if (!oneLowerCase.test(control.value) && control.value !== "" && control.value !== null) {
            errors = { ...errors, 'noLowerCase': true }
        }
        if (!oneDigit.test(control.value) && control.value !== "" && control.value !== null) {
            errors = { ...errors, 'noDigit': true }
        }
        if (!specialChar.test(control.value) && control.value !== "" && control.value !== null) {
            errors = { ...errors, 'noSpecialChar': true }
        }
        if (!minEight.test(control.value) && control.value !== "" && control.value !== null) {
            errors = { ...errors, 'lessThanEight': true }
        }
        return errors;
    }

    confirmPasswordValidation(control: FormControl): { [s: string]: boolean } {
        if (this.form && control.value !== this.form.get('password').value && control.value !== null && control.value !== "") {
            return { passwordsDoesNotMatch: true }
        }
        return null;
    }

    ageValidation(control: FormControl): { [s: string]: boolean } {
        if (control.value <= 16 && control.value !== null && control.value !== "") {
            return { 'ageIsForbidden': true }
        }
        return null;
    }

    onSubmit() {
        const account = {
            firstName: this.form.get('first name').value,
            lastName: this.form.get('last name').value,
            email: this.form.get('email').value,
            password: this.form.get('password').value,
            gender: this.form.get('gender').value,
            age: this.form.get('age').value
        }
        this.acountService.addAccount(account);
        this.form.reset();
    }

    getUsers() {
        this.acountService.getAccounts();
    }

    goToAccounts() {
        this.router.navigate(['/accounts']);
    }

    showPassword() {
        this.isActive = !this.isActive;
    }

    showConfirmPassword() {
        this.confirmIsActive = !this.confirmIsActive;
    }
}
