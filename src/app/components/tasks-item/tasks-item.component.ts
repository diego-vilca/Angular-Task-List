import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task'
import { TASK } from '../../mock-task'
import { faTimes } from '@fortawesome/free-solid-svg-icons'; //font awesome

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent {
  @Input()
  task: Task = TASK[0];
  @Output()
  onDeleteTask: EventEmitter<Task> = new EventEmitter;
  @Output()
  onToggleReminder: EventEmitter<Task> = new EventEmitter;
  
  faTimes = faTimes; //font awesome

  onDelete(task: Task): void {
    // console.log('DELETEEE!!!:', task);
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task): void {
    this.onToggleReminder.emit(task);
  }

}
