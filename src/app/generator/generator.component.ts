import { Component, OnInit, Output ,ViewChild,ElementRef} from '@angular/core';
import { Account } from '../shared/account.model';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
 
  @ViewChild('nameInput',{static:false}) inputName :ElementRef;
  @ViewChild('amountInput',{static:false})inputAmount:ElementRef;
  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }
  addAccount(){
    const newAccount =new Account(this.inputName.nativeElement.value,
      this.inputAmount.nativeElement.value,0);
      console.log(this.inputName.nativeElement.value);
      this.accountService.addAccount(newAccount);
   
 }

}
