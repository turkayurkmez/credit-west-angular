import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { projects } from '../models/mocks/projects.mock';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = projects;
  word: string;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    //console.log(this.route.url.subscribe((x)=>console.log(x)));
    this.route.params.subscribe((arg) => {
      console.log(arg['id']);
      if (arg['id'] != undefined) {
        let id: number = Number.parseInt(arg['id']);
        // this.projects = projects;
        this.projects = projects.filter((pr) => pr.categoryId == id);
      }
    });
  }
}
