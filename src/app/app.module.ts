import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';
import { HeaderComponent } from './header/header/header.component';
import { GeneratorComponent } from './generator/generator.component';
import { AccountDisplayComponent } from './account-display/account-display.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { AccountService } from './shared/account.service';


@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    HeaderComponent,
    GeneratorComponent,
    AccountDisplayComponent,
    SidebarComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
