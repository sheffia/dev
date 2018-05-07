import { Component, OnInit} from '@angular/core';
import {Task} from "./models/task";
import {StorageService} from "./services/storage/storage.service";
import * as _ from 'lodash';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  constructor(private storage: StorageService) {}


  tasks: Task[] = [];

  /** Cette fonction se declenche dans l application lorsque une nouvelle tache est creer dans le composant app-add
   * @param $event*/
  newTask(newTaskEvent: any) {

    /** on ajoute la nouvelle tache dans le tableau de taches.puis on
     *  sauvegarde dans le localStorage*/
    this.tasks.push(newTaskEvent.task);
    this.storage.save(this.tasks);
    //
  }

  ngOnInit(): void {
    /**  au chargement de l application je recupere mes taches
     *
        dans le localstorage   */
    this.tasks = this.storage.getTasks();
  }
  taskIsDone(task: Task){
    task.status = true;
    this.storage.save(this.tasks);
  }
  removeTask(task: Task){
    //suppression de la tache
    _.pullAllWith(this.tasks, [task], _.isEqual);

    // sauvegarde de la tache
    this.storage.save(this.tasks);


  }
}
