import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Account } from "./account.model";

@Injectable({
    providedIn: 'root'
})
export class AccountsService {
    constructor(private http: HttpClient) { }

    addAccount(account) {
        // this.accounts.push(account);
        // console.log(this.accounts);
        this.http.post('http://localhost:3000/signup', account)
            .subscribe(res => console.log(res));
    }

    getAccounts() {
        return this.http.get<{ [users: string]: Account[] }>('http://localhost:3000/users');
    }

    deleteAccount(id: string) {
        return this.http.post(`http://localhost:3000/delete/${id}`, {});
    }

    // Update Account
}