import { TaskViewModel } from './TaskView.model';
import { VariableViewModel } from './VariableView.model';

export class WorkflowViewModel {
    public  workFlowId: number;
    public  workFlowName: string;
    public  launchType: string;
    public  period: number;
    public  isEnabled: boolean;
    public  isApprovalRequired: boolean;
    public  workFlowDescription: string;
    public  variableViewModels: VariableViewModel[];
    public  taskViewModels: TaskViewModel[];
}

export enum LaunchType {
    Startup = 0,
    Trigger = 1,
    Periodic = 2,
    Cron = 3,
}
