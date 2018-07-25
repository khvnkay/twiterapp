import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireList, AngularFireDatabase } from 'angularfire2/database'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  toDolist: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }

  getToDoList(){
    this.toDolist = this.firebasedb.list("titles")
    return this.toDolist
  }

  addTitle(title: string){
    this.toDolist.push({
      title: title,
      isChecked: false 
    })
  }

  checkOrUnCheckTitle($key: string, flag: boolean){
    this.toDolist.update($key, {isChecked: flag});
  }

  deleteData($key: string){
    this.toDolist.remove($key );

  }
}
