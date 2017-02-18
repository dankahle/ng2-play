import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MydirDirective } from './mydir.directive';
import { JquiDatePickerDirective } from './jqui-date-picker.directive';
import { JquiDatePickerDemoComponent } from './demo/jqui-date-picker-demo/jqui-date-picker-demo.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ParentComponent, ChildComponent, MydirDirective, JquiDatePickerDirective, JquiDatePickerDemoComponent],
  exports: [ParentComponent, ChildComponent, MydirDirective, JquiDatePickerDemoComponent]
})
export class SharedModule { }
