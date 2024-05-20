import { Component, OnInit } from '@angular/core';
import { Tag } from '../../../shared/models/Tag';
import { FoodService } from '../../../services/food.service';


@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags?: Tag[];
  activeTagIndex: number = -1; // Initialize as -1 to indicate no active tag

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    });
  }

  setActiveTag(index: number) {
    this.activeTagIndex = index;
  }
}