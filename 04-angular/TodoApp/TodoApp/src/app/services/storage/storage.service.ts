import { Injectable } from '@angular/core';
import {Task} from "../../models/task";

@Injectable()
export class StorageService {

  constructor() { }


  /**  Permet de sauvegarder les taches dans le localStorage */
  save(tasks: Task[]){
    localStorage.setItem('tasks', JSON.stringify(tasks));


  }

  /**  Retourne une liste de taches depuis le local storage ou un tableau vide  */
  getTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if(tasks !== null){
      return tasks;
    }else{
      return [];
    }





  }

}
