import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component: ProjectListComponent},
  {path:'allProjects', component: ProjectListComponent},
  {path:'categories', component: CategoryMenuComponent},
  {path:'projects/category/:id', component: ProjectListComponent},
  {path:'projects/olustur', component: AddProjectComponent, canActivate:[LoginGuard]},
  {path:'categories/olustur', component: AddCategoryComponent, canActivate:[LoginGuard]},
  {path:'login', component: LoginComponent},



  {path:'**', component: ProjectListComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
