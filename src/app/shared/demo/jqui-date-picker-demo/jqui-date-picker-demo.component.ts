import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jqui-date-picker-demo',
  templateUrl: './jqui-date-picker-demo.component.html',
  styleUrls: ['./jqui-date-picker-demo.component.scss']
})
export class JquiDatePickerDemoComponent implements OnInit {
  date:string;

  constructor() { }

  ngOnInit() {
  }

  updateDate(date) {
    this.date = date;
  }
}
