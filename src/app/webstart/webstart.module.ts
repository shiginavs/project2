import {WebstartComponent} from "./webstart.component";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {WebstartRoutingModule} from "./webstart-routing.module";

@NgModule({
  declarations: [
    WebstartComponent
  ],
  imports:[
    BrowserModule,
    WebstartRoutingModule
  ],
  providers:[],
})

export class WebstartModule{ }
