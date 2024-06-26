import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ReadPipe } from './pipes/read.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddCategoryComponent } from './add-category/add-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    CategoryMenuComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    TaskListComponent,
    ReadPipe,
    SearchPipe,
    AddProjectComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
