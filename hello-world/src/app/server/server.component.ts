import { Component } from "@angular/core";

@Component({ 
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    //learning data-binding
    serverId: number = 10;
    serverStatus: string = 'Offline';

    getServerStatus() {
        return this.serverStatus;
    }
}