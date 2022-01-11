import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OsrsSkillComponent } from './osrs-skill/osrs-skill.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { ChatComponent } from './chat/chat.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { FormsModule } from '@angular/forms';
import { ChatPopUpComponent } from './chat-pop-up/chat-pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    OsrsSkillComponent,
    NavbarComponent,
    ChatComponent,
    GroceryListComponent,
    ChatPopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
