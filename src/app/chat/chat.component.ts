import { Component, OnDestroy, OnInit } from '@angular/core';
import { SignalrService } from '../signalr.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  constructor( 
    public signalrService: SignalrService
  ) 
  {}

  someText:string = "";

  ngOnInit() {
    this.signalrService.startConnection();

    setTimeout(() => {
      this.signalrService.askServerListener();
      this.signalrService.askServer();
    }, 2000);
  }

  
  ngOnDestroy() {
    this.signalrService.hubConnection?.off("askServerResponse");
  }

}
