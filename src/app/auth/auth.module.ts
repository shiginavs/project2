import {NgModule} from "@angular/core";
import { LoginComponent } from './login/login.component';
import { RegstrationComponent } from './regstration/regstration.component';
import {AuthComponent} from "./auth.component";
import {CommonModule} from "@angular/common";
import {AuthRoutingModule} from "./auth-roating.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    LoginComponent,
    RegstrationComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ],
  providers: [

  ]
})

export class AuthorizationModule { }

