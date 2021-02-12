

import { transaction } from "./transaction.service";
export class Account {
    public name: string;
    public balance: number;
    public id :number;
    public transactions: transaction[] = [];
    constructor(name: string, amount: number,id:number) {
        this.name = name;
        this.balance = amount;
        this.id =id;
        this.transactions.push(new transaction(new Date(), amount,amount,"Deposit"));
    }
    /**
     * addTransaction
     */
    addTransaction(date: Date, amount: number,type:string) {
        var tempTrans =new transaction(date, amount,amount,type);
        this.transactions.push(tempTrans);
        var tempnumber2 =this.balanceCalculator();
       tempTrans.currentBalance=tempnumber2;
    }

    balanceCalculator() {
        var finalnumber: number = 0;
        this.transactions.forEach(element => {
            var tempNumber: number = Number(element.amount);
            
            finalnumber = finalnumber+ tempNumber;
         
           });
           
        this.balance=finalnumber;
        return finalnumber;
    }
}