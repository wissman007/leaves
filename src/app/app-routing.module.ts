import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdministrationComponent} from './administration/administration.component';
import {ReportingComponent} from './reporting/reporting.component';
import {AuthGuard} from "./auth/auth-guard.service";
import {HomeComponent} from "./home/home.component";


const appRoutes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'admin', loadChildren: './administration/administration.module#AdministrationModule' }, //loadChildren: './administration/administration.module#AdministrationModule'},
      { path: 'leaves', loadChildren: './leaves/leaves.module#LeavesModule', canActivate: [AuthGuard] },
      { path: 'reporting', component:ReportingComponent, canActivate: [AuthGuard] },//loadChildren: './reporting/reporting.module#ReportingModule' }
      { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },

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
