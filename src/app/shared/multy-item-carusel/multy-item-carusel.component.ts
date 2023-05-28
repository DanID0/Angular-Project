import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multy-item-carusel',
  templateUrl: './multy-item-carusel.component.html',
  styleUrls: ['./multy-item-carusel.component.css'],
})
export class MultyItemCaruselComponent implements OnInit {
  @Input() slideWidth: number = 0;
  @Input() slides: Array<any> = [];
  @Input() slideHeight: number = 0;
  isFocus: boolean = false;
  slideTransform: number = 0;
  constructor() {}

  public slidesMove(width: number) {
    if (
      this.slideTransform + width <= 0 &&
      Math.floor(-this.slides.length * this.slideWidth) <=
        this.slideTransform + width - 100
    ) {
      this.slideTransform += width;
    }
  }

  public mouseEnter() {
    this.isFocus = true;
  }

  public mouseLeave() {
    this.isFocus = false;
  }

  private autoSlide(width: number) {
    let self = this;
    if (!this.isFocus) {
      if (
        this.slideTransform + width <= 0 &&
        Math.floor(-this.slides.length * this.slideWidth) <=
          this.slideTransform + width - 100
      ) {
      } else {
        width = -width;
      }

      this.slidesMove(width);
    }
    setTimeout(function () {
      self.autoSlide(width);
    }, 5000);
  }

  ngOnInit(): void {
    this.autoSlide(this.slideWidth);
  }
}
