import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CastI } from 'src/app/interfaces/credits-response.interface';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.scss']
})
export class CastSlideshowComponent implements OnInit, AfterViewInit {

  swiper: Swiper;

  @Input() cast: CastI[];

  constructor() { }

  ngOnInit(): void {    
  }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    });
  }

}
