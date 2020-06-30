import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService] //providing service
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  //Injecting Service
  constructor(
    private loggingService: LoggingService,
    private accService: AccountService) { }


  onSetTo(status: string) {
    this.accService.changeStatus(this.id, status)
    this.loggingService.logStatus(status)
    //emitting an event created by service
    this.accService.statusUpdated.emit(status);
  }
}