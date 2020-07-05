import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppService } from 'src/app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Observables';
  activated = false;
  myNumbersSubscription: Subscription;
  myCustomObservableSubscription: Subscription;

  constructor(private appService: AppService) { }


  ngOnInit() {
    //simple built in observable
    const myNumbers = interval(1000).pipe(
      map((data: number) => {  //map operator
        return data * 2;
      }));
    this.myNumbersSubscription = myNumbers.subscribe((number) => {
      console.log(number)
    })

    this.appService.activatedUser.subscribe((data: number) => {  //subject as a observable subscribing to data
      this.activated = true;
    })

    //custom observable
    const myCustomObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next("First Package")        //next() is responsible for passing data
      }, 2000);
      setTimeout(() => {
        observer.next("Second Package")
      }, 4000);
      // setTimeout(() => {                   //stops further execution
      //   observer.error("ERROR OCCURED!")
      // }, 5000);
      setTimeout(() => {
        observer.complete()                   //completes observable
      }, 6000);
      setTimeout(() => {
        observer.next("Third Package")       //never gets called
      }, 8000);
    })

    this.myNumbersSubscription = myCustomObservable.subscribe((data: string) => {
      console.log(data)
    }, (error: string) => {
      console.log(error)
    }, () => {
      console.log("completed")
    })
  }

  ngOnDestroy() {
    this.myNumbersSubscription.unsubscribe();
    this.myCustomObservableSubscription.unsubscribe();
  }

  onActivate() {
    //subjects acts like both observer and observable
    this.appService.activatedUser.next(1); //subject as a observer pushing data
  }
}
