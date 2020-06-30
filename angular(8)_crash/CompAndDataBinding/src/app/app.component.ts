import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];

  //Add Server
  addServer(server: any) {
    this.serverElements.push(server);
  }

  //Add Blueprint
  addBlueprint(blueprint: any) {
    this.serverElements.push(blueprint);
  }
}
