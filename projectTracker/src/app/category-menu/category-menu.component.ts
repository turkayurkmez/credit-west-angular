import { Component } from '@angular/core';
import { Category } from '../models/category.model';
import { categories } from '../models/mocks/categories.mock';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent {
   categories: Category[] = categories;
}