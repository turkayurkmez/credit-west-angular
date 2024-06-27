import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { NgForm } from '@angular/forms';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category.model';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
})
export class AddProjectComponent implements OnInit {
  constructor(
    private categoryService: CategoriesService,
    private projectService: ProjectsService
  ) {}

  project: Project = new Project();
  categories: Category[];

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
    });
  }

  add(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      this.project = form.value;
      this.projectService
        .addProject(this.project)
        .subscribe((incomingData: Project) => {
          console.log(`${incomingData.name} başarıyla eklendi`);
        });
    }
  }
}
