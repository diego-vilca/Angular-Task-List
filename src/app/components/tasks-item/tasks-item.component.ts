import { Component, Input } from '@angular/core';
import { Task } from '../../Task'
import { TASK } from '../../mock-task'

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent {
  @Input()
  task: Task = TASK[0];
}
