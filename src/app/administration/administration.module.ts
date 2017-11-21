import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import { UsersComponent } from './users/users.component';
import { UserItemComponent } from './users/user-item/user-item.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import {AdministrationRoutingModule} from "./administration-routing.module";
import {MenuModule} from "../menu/menu.module";
import {UserService} from "./services/user.service";

@NgModule({
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    MenuModule
  ],
  exports: [
    AdministrationComponent
  ],
  declarations: [

    AdministrationComponent,
    UsersComponent,

    UserItemComponent,
    UserViewComponent,
    UserEditComponent
  ],
  providers: [
    UserService
  ]
})
export class AdministrationModule { }
