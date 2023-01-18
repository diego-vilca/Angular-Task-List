import { Component, OnInit } from '@angular/core';
import { faTachographDigital } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../../service/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  
  constructor(private taskService: TaskService) { 

  }

  ngOnInit(): void{
    //like promises
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks
  });
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe(() =>{
      this.tasks = this.tasks.filter( t => t.id !== task.id)  
    })
  }

  toggleReminder(task: Task): void {
    //Cambio el valor del reminder desde el front, no estoy actualizando la db!
    task.reminder = !task.reminder;
    //Aqui llamo al servicio y actualizo la db
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks.push(task);
    });
  }
  
  
}
