import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAdditinalStyles]'
})
export class AdditinalStylesDirective {

  constructor(private elem: ElementRef, private renderer: Renderer2) {

    this.renderer.setStyle(this.elem.nativeElement, "cursor", "pointer");
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setShadow('0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setShadow('0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)');
  }

  private setShadow(val: string) {
    this.renderer.setStyle(this.elem.nativeElement, "box-shadow", val);
  }
}
