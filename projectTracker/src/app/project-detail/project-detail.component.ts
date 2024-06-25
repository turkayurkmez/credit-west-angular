import { Component, Input } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent {
  @Input('currentProject') project: Project;
  myNumber: number = 98;
}
