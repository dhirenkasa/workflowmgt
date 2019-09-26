import { Component } from '@angular/core';
import { WORKFLOW_MENU_ITEMS } from './workflow-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['workflow.component.scss'],
  templateUrl: './workflow.component.html'
})
export class WorkflowComponent {
  menu = WORKFLOW_MENU_ITEMS;
  constructor(){ }
}
