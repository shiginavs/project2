import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {SystemComponent} from "./system.component";
import {HomeComponent} from "./home/home.component";
import {CatalogComponent} from "./catalog/catalog.component";
import {SystemRoutingModule} from "./system-routing.module";
import {FooterComponent} from "../shared/component/footer/footer.component";
import {HeaderComponent} from "../shared/component/header/header.component";
import {AppModule} from "../app.module";
import {FeedbackComponent} from "../shared/component/feedback/feedback.component";
import {ReactiveFormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    SystemComponent,
    HomeComponent,
    CatalogComponent,
FooterComponent,
    HeaderComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    SystemRoutingModule,
    ReactiveFormsModule,
    //AppModule
  ],
  providers:[],
})

export class SystemModule{ }
