import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportingComponent } from './reporting.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenuModule} from "../menu/menu.module";
import { LeaveReportsComponent } from './leave-reports/leave-reports.component';
import {ReportingRoutingModule} from "./reporting-routing.module";

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
 //   BrowserAnimationsModule,
    MenuModule,
    ReportingRoutingModule
  ],

  declarations: [ReportingComponent, LeaveReportsComponent]
})
export class ReportingModule { }
