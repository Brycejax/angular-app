import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  styles: [`
        .counter {
            color: white;
        }
    `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  serverCreationStatus = 'No Server Was Created';
  serverName ="Testing";
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];
  buttonClicked = false;
  counter: number = 0;
  counterarr: any = [];
  counterStatus = false;

  username = "";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit(): void {
  }

  onCreateServer () {
    this.serverCreationStatus = "Server created with a name of" + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUsername() {
    this.username = "";
  }
  clicked() {
    this.buttonClicked = true;
    if(this.counter % 2 === 0) {
      this.buttonClicked = true;
    }
    else {
      this.buttonClicked = false;
    }

    if (this.counter >= 5) {
      this.counterStatus = true;
    }
    else{
      this.counterStatus = false;
    }

    this.counterarr.push(this.counter);
    this.counter++;
  }

  getColor() {
    return this.counter > 5 ? "blue" : "";
  }

  getCounterStatus() {
    return this.counterStatus;
  }
}
