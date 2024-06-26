import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { categories } from '../models/mocks/categories.mock';
import { HttpClient } from '@angular/common/http';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css'],
})
export class CategoryMenuComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoriesService) {}

  ngOnInit(): void {
    // this.categoryService.url
    this.categoryService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
    });
  }
}
