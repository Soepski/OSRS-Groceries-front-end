import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SignalrService {
    constructor(
        ) { }

    someText:string = "";
    hubConnection?:signalR.HubConnection;

    startConnection = () => {
        this.hubConnection = new signalR.HubConnectionBuilder()
        .withUrl('https://localhost:44353/chat', {
            skipNegotiation: true,
            transport: signalR.HttpTransportType.WebSockets
        })
        .build();
    
        this.hubConnection
        .start()
        .then(() => {
            console.log('Hub Connection Started!');
        })
        .catch(err => console.log('Error while starting connection: ' + err))
    }


    askServer() {
        this.hubConnection?.invoke("askServer", "hi")
            .catch(err => console.error(err));
    }
    
    public askServerListener(){
        this.hubConnection?.on("askServerResponse", (someText) => {
            console.log(someText)           
        })
    }
}