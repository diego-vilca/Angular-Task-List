import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';
import { Task } from '../../Task';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent {
  @Output() 
  onAddTask : EventEmitter<Task>= new EventEmitter();
  text: string = "";
  day: string = "";
  reminder: boolean = false;   
  showAddTask: boolean = false;
  subscription?: Subscription;

  constructor( private uiService : UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => {
      this.showAddTask = value;
    });
  }

  //validación
  onSubmit(): void {
    if(this.text.length === 0) {
      alert("Please add a task");
      return
    }

    //creo la nueva tarea a agregar
    // const newTask = {
    //   text: this.text,
    //   day: this.day,
    //   reminder: this.reminder
    // }
    //pero lo hago utilizando la deconstruccion que nos permite js
    const {text, day, reminder} = this;
    const newTask = {text, day, reminder};

    this.onAddTask.emit(newTask);
  }

  //TODO
}
