import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EbsService } from '../ebs.service';
import { Subject } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees = [];

  modalOpenSubject: Subject<any> = new Subject<any>();

  constructor(private employeeService: EmployeeService
    ,private ebsService: EbsService
    ,private window: Window) { }

  ngOnInit(): void {
    this.list();
  }

  openAddNewModa() {
    this.modalOpenSubject.next({
      data: {
        mode : "ADD"
      }
    });
  }

  notificationFromChild(data) {
    this.list();
  }

  list():void {
    this.ebsService.ajaxLoader().next(true);
    this.employeeService.getEmployees().subscribe((data: any[])=> {
      console.log(data);
      this.employees = data;
      this.ebsService.ajaxLoader().next(false);
    });
  }

  add(event, emp) {
    window.alert(emp.id);
  }

  edit(event, emp) {
    this.ebsService.ajaxLoader().next(true);
    this.employeeService.getEmployee(emp.id).subscribe((data: any[])=>{
      console.log(data);
      this.modalOpenSubject.next({
        data: {
          mode : "EDIT",
          emp: emp
        }
      });
      this.ebsService.ajaxLoader().next(false);
    });
  }

  delete(event, emp) {
    var yes = window.confirm("Are you sure to delete this item?");
    if(yes){
      this.ebsService.ajaxLoader().next(true);
      this.employeeService.deleteEmployee(emp.id).subscribe((data: any[])=> {
        console.log(data);
        this.ebsService.ajaxLoader().next(false);
        this.list();
      });
    }
  }
}
