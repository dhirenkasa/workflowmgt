import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule, 
  NbUserModule,
  NbLayoutModule,
  NbActionsModule,
  NbCheckboxModule,
  NbMenuModule,
  NbIconModule,
  NbInputModule,
  NbSelectModule
} from '@nebular/theme';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../@theme/theme.module';
import { WorkflowRoutingModule } from './workflow-routing.module';
import { WorkflowComponent } from './workflow.component';
import { WorkflowEditComponent }  from './edit/workflow-edit.component';
import { WorkflowListComponent }  from './list/workflow-list.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    WorkflowRoutingModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    NbLayoutModule,
    NbActionsModule,
    NbCheckboxModule,    
    NbMenuModule,
    NbIconModule,
    Ng2SmartTableModule,
    NbInputModule,
    NbSelectModule
  ],
  declarations: [
    WorkflowComponent,
    WorkflowEditComponent,
    WorkflowListComponent
  ]
})
export class WorkflowModule { }
