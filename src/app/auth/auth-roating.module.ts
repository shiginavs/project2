import {NgModule} from "@angular/core";
import {RouterModule, Routes, Router} from "@angular/router";
import {AuthComponent} from "./auth.component";
import {LoginComponent} from "./login/login.component";
import {RegstrationComponent} from "./regstration/regstration.component";


const routes: Routes = [
  {path: '', component: AuthComponent, children: [
      {path:'login', component:LoginComponent},
      {path:'registration', component: RegstrationComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule{ }
