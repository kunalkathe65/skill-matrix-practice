import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  //Emitting custom events to be listened by parent components(custom event binding)
  //without alias
  @Output() onServerAdded = new EventEmitter<{ type: string, name: string, content: string }>();
  //with alias(then compulsarily alias name should be used)
  @Output('onBpAdded') onBlueprintAdded = new EventEmitter<{ type: string, name: string, content: string }>();

  newServerContent = ''; //two way data binding

  constructor() { }

  //getting input value using local reference(used when we need local ref directly without any method)
  //@ViewChild('serverName', { static: false }) serverNameRef: ElementRef;

  ngOnInit() {
  }
  //server content value is taken using ngModel
  //Below server name value is taken directly because local ref is passed directly to method
  onAddServer(nameInputRef: any) {
    console.log(nameInputRef)
    this.onServerAdded.emit({
      type: 'server',
      //name: this.serverNameRef.nativeElement.value,(@ViewChild way)
      name: nameInputRef.value,
      content: this.newServerContent
    });
  }

  //same as above method
  onAddBlueprint(nameInputRef: any) {
    this.onBlueprintAdded.emit({
      type: 'blueprint',
      //name: this.serverNameRef.nativeElement.value,(@ViewChild way)
      name: nameInputRef.value,
      content: this.newServerContent
    });
  }

}
