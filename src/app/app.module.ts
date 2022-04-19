import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {WebstartModule} from "./webstart/webstart.module";
import {SystemModule} from "./system/system.module";
import {AppRoutingModule} from "./app-routing.module";
import {AuthorizationModule} from "./auth/auth.module";
import {HttpClientModule} from "@angular/common/http";
import {UsersService} from "./shared/services/users.service";
import {AuthService} from "./shared/services/auth.service";
import {MessageFormService} from "./shared/services/messageForm.service";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WebstartModule,
  SystemModule,
    AppRoutingModule,
    AuthorizationModule,
    HttpClientModule
  ],
  providers: [UsersService, AuthService, MessageFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
