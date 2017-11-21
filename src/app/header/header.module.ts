import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {AppRoutingModule} from '../app-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    TranslateModule,
    SharedModule

  ],
  exports: [
    HeaderComponent
  ],
  declarations: [HeaderComponent]
})
export class HeaderModule { }
