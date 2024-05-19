import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider-homepage',
  templateUrl: './slider-homepage.component.html',
  styleUrl: './slider-homepage.component.css'
})
export class SliderHomepageComponent implements OnInit {
  items = [1, 2, 3, 4, 5, 6]; 
  itemActive = 0;
  sliderNames: string[] = [
    'Nuts & Granola',
    'Plant-based Butter',
    'Dried Fruit',
    'Biscotti',
    'Crispy Cookies',
    'Dried Vegetable'
  ];
  slogans: string[] = [
    'Energy Boost', 
    'Spread the Goodness', 
    'Nature Candy', 
    'Dunk into Delight', 
    'Crispiness Unleashed',
    'Nature Bounty Preserved'];
  descriptions: string[]= [
    'Fuel your day with our nuts and granola to keep you going strong all day', 
    'Indulge guilt-free with our creamy plant-based butters', 
    'Charm your taste buds with our selection of succulent dried fruits.', 
    'Experience the perfect crunch and rich flavors of our artisanal biscotti.', 
    'Satisfy your cravings with our irresistibly crispy cookies.',
    'Discover the unique flavors and nutritional benefits of our dried vegetables.'
  ]; 

  urls: string[] = [
    './food/category/Nuts and Granola',
    './food/category/Plant-based Butter',
    './food/category/Dried Fruits',
    './food/category/Biscotti',
    './food/category/Crispy Cookies',
    './food/category/Dried Vegetables'
  ];

  refreshInterval: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.startSlider();
  }

  startSlider(): void {
    this.refreshInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide(): void {
    this.itemActive = (this.itemActive + 1) % this.items.length;
    this.showSlider();
  }

  prevSlide(): void {
    this.itemActive = (this.itemActive - 1 + this.items.length) % this.items.length;
    this.showSlider();
  }

  goToSlide(index: number): void {
    this.itemActive = index;
    this.router.navigate([this.urls[index]]);
  }

  showSlider(): void {
    clearInterval(this.refreshInterval);
    this.startSlider();
  }
}