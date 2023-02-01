import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AccountsService } from "../services/accounts.service";

@Component({
    selector: 'app-update-form',
    templateUrl: './update-form.component.html',
    styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit {
    @Input() index: number;
    @Input() account: {};
    @Input() status: boolean;
    @Output() formStatus = new EventEmitter<number>();
    @Output() accountUpdated = new EventEmitter<{}>();

    changedFlag: boolean = false;
    isActive: boolean = false;
    confirmIsActive: boolean = false;
    dataChanged: {};

    form: FormGroup;

    constructor(private accountsService: AccountsService) { }

    ngOnInit(): void {
        this.form = new FormGroup({
            'first name': new FormControl(this.account['firstName'], Validators.required),
            'last name': new FormControl(this.account['lastName'], Validators.required),
            'email': new FormControl(this.account['email'], [Validators.required, Validators.email]),
            'password': new FormControl(this.account['password'], [Validators.required, this.passwordValidation.bind(this)]),
            'confirm password': new FormControl(this.account['password'], [Validators.required, this.confirmPasswordValidation.bind(this)]),
            'gender': new FormControl(this.account['gender'], Validators.required),
            'age': new FormControl(this.account['age'], [Validators.required, this.ageValidation])
        });

        this.form.get('first name').valueChanges.subscribe(value => this.dataChanged = { ...this.dataChanged, firstName: value });
        this.form.get('last name').valueChanges.subscribe(value => this.dataChanged = { ...this.dataChanged, lastName: value });
        this.form.get('password').valueChanges.subscribe(value => this.dataChanged = { ...this.dataChanged, password: value });
        this.form.get('age').valueChanges.subscribe(value => this.dataChanged = { ...this.dataChanged, age: value });
        this.form.get('gender').valueChanges.subscribe(value => this.dataChanged = { ...this.dataChanged, gender: value });

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

    onUpdateStatus(i: number) {
        this.formStatus.emit(this.index);
    }

    showPassword() {
        this.isActive = !this.isActive;
    }

    showConfirmPassword() {
        this.confirmIsActive = !this.confirmIsActive;
    }

    onUpdate(id: string) {
        this.accountsService.updateAccount(id, this.dataChanged).subscribe(res => {
            console.log(res);
        });
        this.account = { ...this.account, ...this.dataChanged };
        this.formStatus.emit(this.index);
        setTimeout(() => this.accountUpdated.emit(this.dataChanged), 680);
    }
}