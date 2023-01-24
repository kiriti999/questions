import { Component, OnInit } from '@angular/core';
import { WorkflowService } from 'src/app/services/workflow.service';
import { Workflow } from '../../interfaces/workflow';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {

  submissions: Workflow[] = [];

  loading: boolean = true;

  constructor(private workflowService: WorkflowService) { }

  ngOnInit() {
    console.log('init workflow component');
  }

  loadSubmissions(event: LazyLoadEvent) {
    setTimeout(() => {
      this.workflowService.getSubmissions().then(res => {
        this.submissions = res;
        this.loading = false;
      })
    }, 1000);
  }

}
