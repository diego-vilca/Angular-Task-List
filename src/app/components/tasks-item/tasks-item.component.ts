import { Component, Input } from '@angular/core';
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
  
  faTimes = faTimes; //font awesome
}
