import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoistApiService } from './todoist-api.service';
import { TodoTask } from './todo-task';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-todo-app',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule
    ],
    templateUrl: './todo-app.component.html',
    styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {
    tasks: TodoTask[] = [];  // Array to hold the tasks
    completedTasks: TodoTask[] = [];  // New property to hold completed tasks
    loading: boolean = false;  // Variable to track loading state
    newTaskContent: string = ''; //hold the content of the new task

    constructor(private todoService: TodoistApiService) {}

    ngOnInit(): void {
        this.todoService.startService(this.loadTasks.bind(this));
    }

    // Method to load tasks from the Todoist API
    public loadTasks(): void {
        console.log('loading');
        this.loading = true;
        this.todoService.getTasks().subscribe({
          next: tasksFromServer => {
            this.tasks = tasksFromServer.filter(task => !task.isCompleted); // Only active tasks
            this.completedTasks = tasksFromServer.filter(task => task.isCompleted); // Only completed tasks
            this.loading = false;
          },
          error: error => {
            console.log(error);
            this.loading = false;
          }
        });
      }        

    // Improved method to add a new task
    public addTask(taskContent: string): void {
        if (taskContent.trim()) {  // Check if the content is not just whitespace
            const newTask: TodoTask = { content: taskContent.trim() } as TodoTask;  // Creating a new task with the provided content
            this.todoService.newTask(newTask).subscribe({
                next: () => {
                    this.loadTasks();  // Reloading tasks after successfully adding a new one
                    this.newTaskContent = '';
                },
                error: error => {
                    console.log(error);
                }
            });
        }
    }

    // Method to update a task
    public updateTask(updatedTask: TodoTask): void {
        this.todoService.updateTask(updatedTask).subscribe({
            next: () => {
                this.loadTasks();  // Reloading tasks after successfully updating a task
            },
            error: error => {
                console.log(error);
            }
        });
    }

    public completeTask(taskId: string): void {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
          task.isCompleted = true; // Set isCompleted to true
          this.todoService.updateTask(task).subscribe({
            next: () => {
              this.completedTasks.push(task);  // Add the task to the completed tasks list
              this.tasks = this.tasks.filter(t => t.id !== taskId);  // Remove the task from the active tasks list
            },
            error: error => {
              console.log(error);
            }
          });
        }
      }         

      public uncompleteTask(taskId: string): void {
        const task = this.completedTasks.find(t => t.id === taskId);
        if (task) {
          task.isCompleted = false;
          this.todoService.updateTask(task).subscribe({
            next: () => {
              this.tasks.push(task);  // Add the task back to the active tasks list
              this.completedTasks = this.completedTasks.filter(t => t.id !== taskId);  // Remove the task from the completed tasks list
            },
            error: error => {
              console.log(error);
            }
          });
        }
      } 

    // New method to edit a task
    public editTask(task: TodoTask): void {
        // For simplicity, let's prompt the user for a new task content
        const newContent = prompt('Edit task:', task.content);
        if (newContent && newContent.trim() !== task.content) {
            task.content = newContent.trim();
            this.updateTask(task);  // Update the task with the new content
        }
    }

    // Method to delete a task
    public deleteTask(taskId: string): void {
    this.todoService.deleteTask(taskId).subscribe({
        next: () => {
            // Remove the deleted task from the tasks array
            this.tasks = this.tasks.filter(task => task.id !== taskId);
        },
        error: error => console.error('Error deleting task:', error)
    });
}

    // Method to clear all tasks
    public clearAllTasks(): void {
        this.todoService.clearAllTasks(this.tasks).subscribe({
            next: () => {
                // Clear the tasks array
                this.tasks = [];
            },
            error: error => console.error('Error clearing all tasks:', error)
        });
    }

}
