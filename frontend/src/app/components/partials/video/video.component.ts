import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  videos = [
    { src: './assets/video/Homepage1.mp4' },
    { src: './assets/video/Homepage2.mp4' },
    { src: './assets/video/Homepage3.mp4' }
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // thời gian chờ trước khi chuyển slide (5 giây)
    arrows: false,
    dots: true
  };
}

