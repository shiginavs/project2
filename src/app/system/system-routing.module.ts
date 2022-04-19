import {NgModule} from "@angular/core";
import {RouterModule, Routes, Router} from "@angular/router";
import {SystemComponent} from "./system.component";
import {HomeComponent} from "./home/home.component";
import {CatalogComponent} from "./catalog/catalog.component";


const routes: Routes = [
  {path: 'system', component: SystemComponent, children: [
      {path: 'home', component: HomeComponent},
      {path:'catalog', component:CatalogComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule{ }
