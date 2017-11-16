import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    AdministrationComponent
  ],
  declarations: [AdministrationComponent]
})
export class AdministrationModule { }
