import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appUiColor]'
})
export class UiColorDirective {

  @Input()
  public myColor: string;

  constructor(private el: ElementRef) {

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.myColor || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
