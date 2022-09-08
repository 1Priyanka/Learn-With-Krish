import { Component, OnInit } from '@angular/core';
import employees from './data/employees.json';
import { Employee } from './employees.model';


@Component({
  selector: 'em-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  title: string = 'Employee Management System'
  employees: Employee[] = employees;
  filterdEmployees: Employee[] = employees;
  showIcon: boolean = false;
  message: string = '';
  private _designationFilter: string = ''


  set designationFilter(value: string) {
    this._designationFilter = value;
    this.filterDesignation()
  }

  get designationFilter(): string {
    return this._designationFilter;
  }


  constructor() { }

  ngOnInit(): void {
  }

  toggleIcon() {
    this.showIcon = !this.showIcon;
  }
  filterDesignation() {
    this.filterdEmployees = this.employees.filter(employee => employee.designation.includes(this.designationFilter));
    
  }
  //filterDesignation() {
  //  return this.filterdEmployees.filter(employee => employee.designation.includes(this.designationFilter));
  //}
  onMessageRecived(value: string) {
    this.message = value;

  }
}
