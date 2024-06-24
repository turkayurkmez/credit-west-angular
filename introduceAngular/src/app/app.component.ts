import { Component } from '@angular/core';
import { TodoItem } from './models/todoItem.model';
import { fakeTodoItems } from './models/todoItem.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Angular Öğrenmeye hazır mısın?';
  paragraph: string = "Bu html'e bind edilecek bir paragraf";
  createdDate: string = 'Temmuz 2024';

  isApproved: boolean = true;

  countries: string[] = ['Türkiye', 'KKTC', 'Norveç', 'Almanya'];

  todoItems: TodoItem[] = fakeTodoItems;

  getUndoneTasksCount(): number {
    return this.todoItems.filter((todo) => todo.isDone === false).length;
  }

  buttonText: string = 'Yapılan işleri gizle';
  isAllTasksShowing: boolean = true;

  filter(): void {
    this.isAllTasksShowing = !this.isAllTasksShowing;
    if (!this.isAllTasksShowing) {
      this.todoItems = this.todoItems.filter((todo) => !todo.isDone);
      this.buttonText = "Hepsini göster"
    } else {
      this.todoItems =fakeTodoItems;
      this.buttonText = 'Yapılan işleri gizle';


    }
  }

  addNewTask(name:string){
    this.todoItems.push(new TodoItem(name,false));
  }
}
