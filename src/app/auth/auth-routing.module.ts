import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {SignOutComponent} from "./signout.component";

const authRoutes: Routes = [
    {path: 'signin', component: SigninComponent},
    {path: 'signout', component: SignOutComponent},
    {path: 'signup', component: SignupComponent }

];

@NgModule({
    imports: [

        RouterModule.forChild(authRoutes)

    ],
    exports: [
        RouterModule
    ]

})

export class AuthRoutingModule {

}