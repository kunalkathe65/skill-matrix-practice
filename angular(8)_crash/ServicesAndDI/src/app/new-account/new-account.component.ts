import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {


  constructor(private loggingService: LoggingService, private accService: AccountService) {
    //subscribing to an event
    this.accService.statusUpdated.subscribe((status: string) => {
      alert("New Status:" + status);
    })
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accService.addAccount(accountName, accountStatus)
    this.loggingService.logStatus(accountStatus);
  }
}