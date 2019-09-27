import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import { FormBuilder, FormGroup, FormArray, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-workflow',
  templateUrl: 'workflow-edit.component.html',
  styleUrls: ['workflow-edit.component.scss'],
})
export class WorkflowEditComponent implements OnInit {

  constructor(private menuService: NbMenuService,private fb: FormBuilder) { }

  variableForm: FormGroup;
  taskForm: FormGroup;
  
  ngOnInit(){
    this.variableForm = this.fb.group({
      title: [],
      variableList: this.fb.array([])
    })
    this.taskForm = this.fb.group({
      title: [],
      taskList: this.fb.array([])
    })
  }

  get variableList() {
    return this.variableForm.get('variableList') as FormArray;
  }

  addVariable() {
    this.variableList.push(this.fb.group({point:''}));
  }

  deleteVariable(index) {
    this.variableList.removeAt(index);
  }


  get taskList() {
    return this.taskForm.get('taskList') as FormArray;
  }

  addTask() {
    this.taskList.push(this.fb.group({point:''}));
  }

  deleteTask(index) {
    this.taskList.removeAt(index);
  }

  onSubmitWorkflow(myForm:NgForm)
  {
    debugger
  }
}
