import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appSwitchWindow]'
})
export class SwitchWindowDirective  {

  constructor(
    private renderer: Renderer2,
    private elRef: ElementRef)
  { }


  // // @HostListener('window:resize', ['$event.target'])
  // onResize()
  // {
  //   this.resizeWorks();
  // }

  // ngAfterViewInit() {
  //   this.resizeWorks();
  // }

  // private resizeWorks(): void {
  //   this.renderer.setElementStyle(this.el, 'height', this.el.width); // <-- doesn't work I kow that this.el.width doesn't exist but just for demonstration purpose
  //   this.renderer.setElementStyle(this.el, 'height', '500'); // <-- works
  // }

}
