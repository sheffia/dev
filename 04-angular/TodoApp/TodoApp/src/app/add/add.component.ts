import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from "../models/task";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  /**  permet d emettre un evenement lors de la creation d une tache @type{ EventEmitter<any>}   */

  task: Task = new Task();
  @Output() newTaskEvent = new EventEmitter();

  /** reinitialisation du formulaire
   * @type {boolean}
   * */
  active = true;

  constructor() { }

  ngOnInit() {
  }

  addTask() {
    // console.log(this.task);

    /**  Lorsque l utilisateur soumet le formulaire ,j emet l evenement
     *  avec la nouvelle tache */
    this.newTaskEvent.emit({task: this.task});

    /** reinitialisation du formulaire*/
    this.active = false;
    setTimeout(() => this.active = true, 0);

  }

}
