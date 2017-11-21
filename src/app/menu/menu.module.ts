import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import {SharedModule} from '../shared/shared.module';
import {AuthService} from "../auth/auth.service";
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    MenuComponent
  ],
  declarations: [MenuComponent],
  providers: [
      AuthService
  ]
})
export class MenuModule {




}
