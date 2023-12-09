import { Injectable } from '@angular/core';
import { Observable, from, forkJoin } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { TodoistApi } from '@doist/todoist-api-typescript';

import { environment } from 'src/environments/environment';
import { TodoTask } from './todo-task';

@Injectable({
    providedIn: 'root'
})
export class TodoistApiService {
    private api = new TodoistApi(environment.todoist.token);
    private projectName: string = environment.todoist.project;
    private projectId: string | undefined;

    constructor() { }

    public startService(callback: () => void): void {
        this.api.getProjects()
            .then((projects) => {
                let project = projects.find(project => project.name == this.projectName);
                if (project === undefined) {
                    console.error('Could not find the project:', this.projectName);
                    throw Error;
                }

                console.log('got id');
                this.projectId = project.id;

                callback();
            }).catch((error) => {
                console.error('Error fetching tasks:', error);
                return error;
            });
    }

    public getTasks(): Observable<TodoTask[]> {
        return from(this.api.getTasks({projectId: this.projectId})).pipe(
            map(tasks => tasks as TodoTask[]),
            catchError(error => {
                console.error('Error fetching tasks:', error);
                return [];
            })
        );
    }

    public newTask(task: TodoTask): Observable<void> {
        task.projectId = this.projectId!;
        return from(this.api.addTask(task)).pipe(
            map(() => console.log('Task created successfully')),
            catchError(error => {
                console.error('Error creating task:', error);
                throw error; // Throwing error to be handled by the component or globally
            })
        );
    }

    public updateTask(task: TodoTask): Observable<void> {
        return from(this.api.updateTask(task.id, task)).pipe(
            map(() => console.log('Task updated successfully')),
            catchError(error => {
                console.error('Error updating task:', error);
                throw error;
            })
        );
    }

    public deleteTask(taskId: string): Observable<void> {
        return from(this.api.deleteTask(taskId)).pipe(
            map(() => console.log('Task deleted successfully')),
            catchError(error => {
                console.error('Error deleting task:', error);
                throw error;  // Propagate the error to be handled by the component
            })
        );
    }

    public markTaskCompleted(taskId: string): Observable<void> {
        return from(this.api.closeTask(taskId)).pipe(
            map(() => console.log('Task marked as completed')),
            catchError(error => {
                console.error('Error marking task as completed:', error);
                throw error;
            })
        );
    }

    public clearAllTasks(tasks: TodoTask[]): Observable<void> {
        // Create an array of observables for each task to be deleted
        const deleteTasksObservables = tasks.map(task => this.deleteTask(task.id));

        // Use forkJoin to execute all delete task observables
        return forkJoin(deleteTasksObservables).pipe(
            map(() => console.log('All tasks cleared successfully')),
            catchError(error => {
                console.error('Error clearing all tasks:', error);
                throw error;  // Propagate the error to be handled by the component
            })
        );
    }
}
