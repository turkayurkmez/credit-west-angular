import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { projects } from '../models/mocks/projects.mock';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  projects: Project[];
  word: string;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectsService
  ) {}
  ngOnInit(): void {
    //console.log(this.route.url.subscribe((x)=>console.log(x)));
    //let id:number = 0;
    this.route.params.subscribe((arg) => {

      let observableProjects = arg['id'] != undefined ?
       this.projectService.getProjectByCategory(Number.parseInt(arg['id']))    : this.projectService.getProjects();
     
      observableProjects.subscribe((data)=>{
        this.projects = data;
      })                                              
      console.log(arg['id']);
     
    });
  }
}
