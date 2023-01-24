import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../../services/workflow.service';
import { Workflow } from '../../interfaces/workflow';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  submissions: Workflow[] = [];

  constructor(private workflowService: WorkflowService) { }

  ngOnInit() {
    this.workflowService.getSubmissions().then(data => this.submissions = data);
  }
}
