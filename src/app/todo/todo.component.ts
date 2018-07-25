import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service'
import { element } from '../../../node_modules/protractor';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  toDoListArray: any[];
  constructor(private ToDoService: TodoService) { }

  ngOnInit() {
    console.log(this.ToDoService);
    
    this.ToDoService.getToDoList().snapshotChanges()
    .subscribe( item => {
      this.toDoListArray = [];
      item.forEach( element => {
        var x  = element.payload.toJSON()
        x["$key"] = element.key;
        this.toDoListArray.push(x)
      })
      this.toDoListArray.sort((a, b)=>{
        return a.isChecked - b.isChecked;
      })
    })
  }
  onAdd(itemTitle){
    this.ToDoService.addTitle(itemTitle.value)
    itemTitle.value = null;

  }
  alterCheck($key: string,isChecked) {
    this.ToDoService.checkOrUnCheckTitle($key,!isChecked);
  }
  deleteData($key: string){
    this.ToDoService.deleteData($key)
  }
}
