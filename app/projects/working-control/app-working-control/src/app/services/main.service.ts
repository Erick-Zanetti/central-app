import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { TaskRelease } from '../models/task-release';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  get url() {
    return environment.workingControlApi;
  }

  constructor(private http: HttpClient) {

  }

  create(taskRelease: TaskRelease) {
    return this.http.post(this.url + "/tasks", taskRelease);
  }

  findAll() {
    return this.http.get(this.url + "/tasks");
  }

  findOne(id: string) {
    return this.http.get(`${this.url}/tasks/${id}`);
  }

  update(id: string, taskRelease: TaskRelease) {
    return this.http.patch(`${this.url}/tasks/${id}`, taskRelease);
  }

  remove(id: string) {
    return this.http.delete(`${this.url}/tasks/${id}`);
  }

  getTasks(month: number, year: number): Observable<TaskRelease[]> {
    return this.http.get<TaskRelease[]>(`${this.url}/tasks/by-month?month=${month}&year=${year}`);
  }
}
