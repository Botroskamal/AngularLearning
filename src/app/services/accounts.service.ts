import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

type account = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    gender: string,
    age: number
}

@Injectable({
    providedIn: 'root'
})
export class AccountsService {
    constructor(private http: HttpClient) { }

    addAccount(account: account) {
        // this.accounts.push(account);
        // console.log(this.accounts);
        this.http.post('http://localhost:3000/signup', account)
            .subscribe(res => console.log(res));
    }

    getAccounts() {
        this.http.get<{ [users: string]: account[] }>('http://localhost:3000/users').subscribe(res => console.log(res));
    }
}