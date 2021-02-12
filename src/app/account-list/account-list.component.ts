import { Component, EventEmitter, OnInit, Output ,Input} from '@angular/core';
import { Account } from '../shared/account.model';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
  
 
})
export class AccountListComponent implements OnInit {
  // @Output() accountwasSelected =new EventEmitter<Account>();
  

 accounts:Account[];
  constructor(private accountService:AccountService) {

   }

  ngOnInit(): void {
    this.accounts=this.accountService.getAccounts();
    this.accountService.changed.subscribe
    ((account:Account[])=>{
        this.accounts=account;
    })
  }
  
  addAccount(account:Account){
    this.accounts.push(account);
  }

  onSelected(account:Account){
   this.accountService.accountSelected.emit(account);
  }

 
  

}
