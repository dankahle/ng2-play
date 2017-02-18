import {Directive, ElementRef} from '@angular/core';
declare var $: any;

@Directive({
  selector: '[mydir]'
})
export class MydirDirective {

  constructor(private elem:ElementRef) { }

  ngOnInit() {
    $(this.elem.nativeElement).css("color", "red");
  }

}
