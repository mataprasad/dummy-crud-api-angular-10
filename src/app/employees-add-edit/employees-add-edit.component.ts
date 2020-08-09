import { Component, OnInit, ViewChild , Input, OnDestroy, EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable, throwError,Subscription } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { EbsService } from '../ebs.service';

declare var $: any;

@Component({
  selector: 'app-employees-add-edit',
  templateUrl: './employees-add-edit.component.html',
  styleUrls: ['./employees-add-edit.component.css']
})
export class EmployeesAddEditComponent implements OnInit,OnDestroy {

  @Input() modalOpen: Observable<any>;

  @Output() notiferForParent: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  title: string;

  eventsSubscription: Subscription;
  
  constructor(public fb: FormBuilder
    ,private employeeService: EmployeeService
    ,private ebsService: EbsService) { 
    this.initEmptyForm();
  }

  ngOnInit(): void {
    this.eventsSubscription = this.modalOpen.subscribe(({data}) => this.modalOpenClickedOnParent(data));
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  submitForm() {
    console.log(this.form.value)
    if(this.form.value.mode == 'EDIT'){
      this.postEdit();
    } else if(this.form.value.mode == 'ADD'){
      this.postAdd();
    }
  }

  postEdit(){
    this.ebsService.ajaxLoader().next(true);
    let emp = this.form.value;
    this.employeeService.editEmployee(this.form.value.id,emp).subscribe((data: any[])=>{
      console.log(data);
      this.ebsService.ajaxLoader().next(false);
      $("#btnClose").click();
      this.notiferForParent.emit(this.form.value);
    });
  }

  postAdd(){
    this.ebsService.ajaxLoader().next(true);
    let emp = this.form.value;
    const unixTime = Math.floor(Date.now() / 1000);
    emp.id = unixTime;
    this.employeeService.addEmployee(this.form.value).subscribe((data: any[])=>{
      console.log(data);
      this.ebsService.ajaxLoader().next(false);
      $("#btnClose").click();
      this.notiferForParent.emit(this.form.value);
    });
  }

  initEmptyForm() {
    this.form = this.fb.group({
      id: [''],
      firstName: [''],
      lastName: [''],
      city: [''],
      country: [''],
      homePhone: [''],
      mode: ['ADD'],
    });
  }

  modalOpenClickedOnParent(data){
    this.initEmptyForm();
    if(data.mode == "ADD") {
      this.title = "Add New Employee";
    } else if(data.mode == "EDIT") {
      this.title = "Edit Selected Employee";
      let emp = data.emp;
      this.form = this.fb.group({
        id: [emp.id],
        firstName: [emp.firstName],
        lastName: [emp.lastName],
        city: [emp.city],
        country: [emp.country],
        homePhone: [emp.homePhone],
        mode: [data.mode],
      });
    }
    $("#employee-add-edit-model").modal('show');
  }
}
