import {NgModule} from '@angular/core';
import {DropdownDirective} from './dropdown.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  exports : [

    DropdownDirective
  ],
  declarations: [
    DropdownDirective
  ]

})
export class SharedModule {

}
