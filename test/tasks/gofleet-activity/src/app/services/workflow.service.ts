import { Workflow } from '../interfaces/workflow';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  constructor(private http: HttpClient) { }

  getSubmissions() {
    return this.http.get<any>('assets/submissions.json')
      .toPromise()
      .then(res => <Workflow[]>res.data)
      .then(data => { return data; });
  }
}

