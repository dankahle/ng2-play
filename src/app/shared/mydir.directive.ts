import {Directive, ElementRef} from '@angular/core';
declare var $: any;

@Directive({
  selector: '[mydir]',
  exportAs: 'dboy'
})
export class MydirDirective {

  constructor(private elem:ElementRef) { }

  prop = 'lala';
  ngOnInit() {
    $(this.elem.nativeElement).css("color", "red");
  }

}
