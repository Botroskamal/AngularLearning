type account = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    gender: string,
    age: number
}


export class AccountsService {
    accounts: account[] = [];

    addAccount(account: account) {
        this.accounts.push(account);
        console.log(this.accounts);
    }
}