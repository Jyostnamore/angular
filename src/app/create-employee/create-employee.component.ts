import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  credentials={
    id:'',
    firstname:'',
    lastname:'',
    email:'',
    address:'',
    mobileno:'',
    date:'',
    city:''

  }
  employee:Employee=new Employee();
  constructor(private employeeservice:EmployeeserviceService,
    private router:Router) { }

  ngOnInit(): void {
  }
 
  saveEmployee()
  {
    this.employeeservice.createEmployee(this.employee).subscribe(data =>{
      console.log(data);
      this.goToEmpList();
    },
    error=>console.log(error));
   
  }
  goToEmpList()
  {
    this.router.navigate(['/employees']);
  }
  onSubmit()
  {
    console.log(this.employee);
    if((this.credentials.id!='' && this.credentials.firstname!='' &&this.credentials.lastname!=''&&
    this.credentials.email!=''&&
    this.credentials.mobileno!='' && this.credentials.city!='')&& (this.credentials.date!=null&& this.credentials.id!=null && this.credentials.firstname!=null&& this.credentials.lastname!=null&& this.credentials.email!=null&& this.credentials.mobileno!=null))
    {
    this.saveEmployee();
  }
  (error:any) =>{
    //error
    console.log(error)}
    
  
}
}
