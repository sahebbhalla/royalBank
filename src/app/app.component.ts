import { Component, OnInit } from '@angular/core';
import { Account } from './shared/account.model';
import { AccountService } from './shared/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  selectedAccount:Account;
  title = 'RoyalBank';
  constructor(private accountService:AccountService){

  }
  ngOnInit(){
    this.accountService.accountSelected
    .subscribe((account:Account)=>{
      this.selectedAccount=account;
    }

    )
  }
}
