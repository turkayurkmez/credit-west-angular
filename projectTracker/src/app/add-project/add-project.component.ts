import { Component } from '@angular/core';
import { Project } from '../models/project.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
    project: Project = new Project();

    add(form: NgForm){
      if (form.valid) {
        console.log(form.value);
      }
    }

}
