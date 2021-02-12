import { Injectable, EventEmitter } from '@angular/core';

import { Account } from '../shared/account.model';
import { transaction } from './transaction.service';
@Injectable()
export class AccountService {
    changed = new EventEmitter<Account[]>();
    accountSelected =new EventEmitter<Account>();
    private accounts: Account[] = [
        new Account("Carl", 0,30211),
        new Account("James", 0,30212)

    ];
    currentId:number=30212;
    getAccounts() {
        return this.accounts.slice();
    }
    addAccount(account: Account) {
        this.currentId++;
        account.id=this.currentId;
        this.accounts.push(account);
        this.changed.emit(this.accounts.slice());
    }
    addTransaction(account:Account,transAmount:number){
        var tempTrans = new transaction(new Date(),transAmount,transAmount,"Type");
        account.transactions.push(tempTrans);

    }

    transfer(Accnumber:number,transAmount:number,name:string){
        var accNumber =Number(Accnumber);
        this.accounts.forEach(account => {
            if(account.id===accNumber){
                
                account.addTransaction(new Date(),-transAmount,"Transfer from "+name);
            }
        });
    }

}