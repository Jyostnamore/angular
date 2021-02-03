import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationDialogueComponent } from '../confirmation-dialogue/confirmation-dialogue.component';
import { Employee} from '../employee'
import { EmployeeserviceService } from '../employeeservice.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
employees!: Employee[];
  constructor(private employeeser:EmployeeserviceService,private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getEmployees();
    
  }
  private getEmployees()
  {
    this.employeeser.getEmployeesList().subscribe(data =>
      {
        this.employees=data;
      });
  }
  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }
  updateEmployee(id: number){
    const confirmDialog = this.dialog.open(ConfirmationDialogueComponent, {
      data: {
        title: 'Confirm update Employee',
        message: 'Are you sure, you want to Update an employee: '
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.router.navigate(['update-employee',id]);
        console.log(id);
      }
        });
      }
   
  // deleteEmployee(id: number){
  //   alert("Are you sure You want to delete?");
  //   this.employeeser.deleteEmployee(id).subscribe( data => {
  //     console.log(data);
  //     this.getEmployees();
  //   })
  // }
 
  deleteEmployee(id: number) {
    const confirmDialog = this.dialog.open(ConfirmationDialogueComponent, {
      data: {
        title: 'Confirm Remove Employee',
        message: 'Are you sure, you want to remove an employee: '
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.employeeser.deleteEmployee(id).subscribe( data => {
          console.log(data);
          this.getEmployees();
        })
      }
    });
  }
}

