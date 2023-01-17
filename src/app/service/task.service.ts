import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../Task';
import { TASK } from 'src/app/mock-task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'; 
   
  constructor( 
    private http: HttpClient
  ) { }

  getTasks() : Observable<Task[]> {
    // const tasks$ = of(TASK); //convierto el array TASK en observable
    // return tasks$;
    return this.http.get<Task[]>(this.apiUrl); 

  }
}