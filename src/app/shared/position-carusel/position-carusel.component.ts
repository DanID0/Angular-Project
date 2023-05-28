import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-position-carusel',
  templateUrl: './position-carusel.component.html',
  styleUrls: ['./position-carusel.component.css'],
})
export class PositionCaruselComponent implements OnInit {
  @Input() slides: Array<any> = [];
  public mainIndex = 1000000;
  constructor() {}

  ngOnInit(): void {
    let self = this;
    this.mainIndex = this.slides.length * 100000;

    setInterval(function () {
      self.move(true);
    }, 5000);
  }

  setImgClass(caruselIndex: number): string {
    console.log(caruselIndex);
    if ((caruselIndex + this.mainIndex) % this.slides.length == 0) {
      return 'left';
    }
    if ((caruselIndex + this.mainIndex) % this.slides.length == 1) {
      return 'center';
    }
    if ((caruselIndex + this.mainIndex) % this.slides.length == 2) {
      return 'right';
    }
    return 'behind';
  }

  move(isRight: boolean) {
    if (isRight) {
      this.mainIndex++;
    } else {
      this.mainIndex--;
    }
  }
}
