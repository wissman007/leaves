import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AdministrationComponent} from "./administration/administration.component";


const appRoutes: Routes = [

      { path: 'administration', component: AdministrationComponent }, //loadChildren: './administration/administration.module#AdministrationModule'},
      { path: 'leaves', loadChildren: './leaves/leaves.module#LeavesModule' }

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}