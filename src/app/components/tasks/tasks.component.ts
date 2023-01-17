import { Component, OnInit } from '@angular/core';
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

  //Cambio el valor del reminder desde el front, no estoy actualizando la db!
  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    // console.log(task.reminder); 
  }

}
