import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkflowComponent } from './workflow.component';
import { WorkflowEditComponent } from './edit/workflow-edit.component';
import { WorkflowListComponent } from './list/workflow-list.component';

const routes: Routes = [{
  path: '',
  component: WorkflowComponent,
  children: [
    {
      path: '',
      component: WorkflowListComponent,
    },
    {
      path: 'add',
      component: WorkflowEditComponent,
    },
  ] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkflowRoutingModule {
}
