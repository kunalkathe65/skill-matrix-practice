import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-serverelement',
  templateUrl: './serverelement.component.html',
  styleUrls: ['./serverelement.component.css']
})
export class ServerelementComponent implements OnInit {

  //Exposing property to be bindable in parent class(custom property binding)
  //with alias(then compulsarily alias name should be used)
  @Input('server') element: { type: string, name: string, content: string };
  //without alias
  // @Input('server') element: { type: string, name: string, content: string };

  constructor() { }

  ngOnInit() {
  }

}
