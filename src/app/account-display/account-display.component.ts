import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../shared/account.model';
import { AccountService } from '../shared/account.service';
@Component({
  selector: 'app-account-display',
  templateUrl: './account-display.component.html',
  styleUrls: ['./account-display.component.css']
})
export class AccountDisplayComponent implements OnInit {
@Input() account:Account;
  accountSelected:Boolean=false;
  constructor(private AccountSer :AccountService) {
   
   }

  ngOnInit(): void {

  }
  depositAmount(amount:number){
    
    this.account.addTransaction(new Date(),amount,"Desposit");
    
  }
  withdrawl(amount:number){
    
    this.account.addTransaction(new Date(),amount,"Withdrawl");
    
  }
  transfer(accountNumber :number,transferAmount:number, name:string){
    this.account.addTransaction(new Date(),transferAmount,"Transfered to "+name);
    name=this.account.name;
    this.AccountSer.transfer(accountNumber,transferAmount,name);

  }
}
