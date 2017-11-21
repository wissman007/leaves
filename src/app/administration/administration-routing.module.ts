import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {UsersComponent} from "./users/users.component";
import {UserViewComponent} from "./user-view/user-view.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {AdministrationComponent} from "./administration.component";

const administationRoutes: Routes = [
  {path: '', component:AdministrationComponent, children: [
    {path: 'users', component:UsersComponent, children: [
      {path: 'new', component:UserEditComponent},
      {path: ':id', component:UserViewComponent},
      {path: ':id/edit', component:UserEditComponent}
    ]}

  ]}
];

@NgModule({
    imports: [
      RouterModule.forChild(administationRoutes)
    ],
  exports: [
    RouterModule
  ]
})
export class AdministrationRoutingModule {

}
