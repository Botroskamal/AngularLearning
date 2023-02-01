import { Component, OnInit } from "@angular/core";
import { AccountsService } from "../services/accounts.service";

import { Account } from "../services/account.model";

@Component({
    selector: 'app-accounts',
    templateUrl: './accounts.component.html',
    styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
    accounts: Account[] = [];
    isUpdating: boolean[] = [];
    errorFlag: boolean = false;
    isFetching: boolean = false;

    constructor(private accountsService: AccountsService) { }

    ngOnInit(): void {
        this.isFetching = true;
        setTimeout(() => {
            this.accountsService.getAccounts().subscribe(accounts => {
                this.accounts = [...new Set(accounts)]
                for (let i = 0; i < accounts.length; i++) {
                    this.isUpdating.push(false);
                }
                this.isFetching = false;
            }, error => {
                this.errorFlag = true
            });
        }, 3000)
    }

    onDelete(id: string) {
        this.accountsService.deleteAccount(id).subscribe(res => {
            console.log(res);
            this.accounts = res['users'];
        });
    } g

    onUpdateStatus(i: number) {
        this.isUpdating[i] = !this.isUpdating[i];
    }

    onAccountUpdated(data: {}, i: number) {
        this.accounts[i] = { ...this.accounts[i], ...data };
    }
}