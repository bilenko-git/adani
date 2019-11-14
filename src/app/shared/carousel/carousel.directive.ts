import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { CarouselConfig } from './carousel.model';

@Directive({
  selector: '[dkCarousel]'
})
export class CarouselDirective implements OnInit, AfterViewInit, OnDestroy {
  @Input('dkCarousel') config: CarouselConfig;
  private owlElement;

  constructor(hostElement: ElementRef) {
    this.owlElement = $(hostElement.nativeElement);
  }

  ngOnInit(): void {
    // TODO: Throw Error if config is not defined.
  }

  ngAfterViewInit(): void {
    this.owlElement.owlCarousel(this.config);
  }

  ngOnDestroy(): void {
    this.owlElement.trigger('destroy.owl.carousel');
  }
}
