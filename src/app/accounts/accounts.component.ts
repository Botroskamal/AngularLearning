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

    constructor(private accountsService: AccountsService) { }

    ngOnInit(): void {
        this.accountsService.getAccounts().subscribe(accounts => {
            this.accounts = [...new Set(accounts['users'])]
            this.accounts.map((item: any) => {
                item.status = false;
                // ...accounts
            })
        });
    }

    onDelete(id: string) {
        this.accountsService.deleteAccount(id).subscribe(res => {
            console.log(res);
            this.accounts = res['users'];
        });
    } g

    onUpdateStatus(i: number) {
        this.accounts[i]['status'] = !this.accounts[i]['status'];
    }
}