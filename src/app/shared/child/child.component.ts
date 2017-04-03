import { Component, OnInit } from '@angular/core';
import {ParentComponent} from "../parent/parent.component";
import {AppComponent} from "../../app.component";

@Component({
  exportAs: 'cboy',
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  val = 'childval';
  prop = 'alal';
  constructor(private parent:AppComponent) {

  }


}
