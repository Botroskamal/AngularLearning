import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-update-form',
    templateUrl: './update-form.component.html',
    styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit {
    @Input() index: number;
    @Input() account;
    @Output() formStatus = new EventEmitter<number>();

    changedFlag: boolean = false;

    form: FormGroup;

    constructor() { }

    ngOnInit(): void {
        this.form = new FormGroup({
            'first name': new FormControl(this.account['firstName'], Validators.required),
            'last name': new FormControl(this.account['lastName'], Validators.required),
            'email': new FormControl(this.account['email'], [Validators.required, Validators.email]),
            'password': new FormControl(this.account['password'], [Validators.required, this.passwordValidation.bind(this)]),
            // 'password': new FormControl(this.account[''], Validators.required),
            'confirm password': new FormControl(this.account['confirm password'], [Validators.required, this.confirmPasswordValidation.bind(this)]),
            'gender': new FormControl(this.account['gender'], Validators.required),
            'age': new FormControl(this.account['age'], [Validators.required, this.ageValidation])
        });

        this.form.valueChanges.subscribe(value => this.changedFlag = true);
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

    onUpdate() {

    }

    onUpdateStatus(i: number) {
        this.formStatus.emit(this.index);
    }
}