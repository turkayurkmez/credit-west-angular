import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  url: string= 'http://localhost:5263/api/Projects';

  getProjects():Observable<Project[]>{
    return this.http.get<Project[]>(this.url).pipe(tap(x=>console.log('Dikkat:',x)));
  } 

  getProjectByCategory(categoryId: number):Observable<Project[]>{
    console.log(this.url+'/'+categoryId)
    return this.http.get<Project[]>(this.url+'/'+categoryId); 
  }

  addProject(project: Project):Observable<Project>{
      // let option = {
      //   headers: {
      //     'Authorization':'Bearer [TOKEN]'
      //   }
      // }
      return this.http.post<Project>(this.url,project);
 
  }
}
