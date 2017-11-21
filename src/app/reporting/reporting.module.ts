import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportingComponent } from './reporting.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenuModule} from "../menu/menu.module";

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MenuModule
  ],
  declarations: [ReportingComponent]
})
export class ReportingModule { }
