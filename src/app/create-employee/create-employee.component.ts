import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { FormGroup,  FormBuilder } from '@angular/forms';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeserviceService } from '../employeeservice.service';
import {FormControl, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogueComponent } from '../confirmation-dialogue/confirmation-dialogue.component';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeform!: FormGroup;
    submitted = false;
 // contactData:any;

 
 //email = new FormControl('', [Validators.required, Validators.email]),
 



//   return this.valid.first.hasError('first') ? 'Not a valid id' : '';
//  }
//   //email validation
//   getErrorMessage() {
//     if (this.valid.email.hasError('required')) {
//       return 'You must enter a value';
//     }

//     return this.valid.email.hasError('email') ? 'Not a valid email' : '';
//   }


  employee:Employee=new Employee();
  constructor(private employeeservice:EmployeeserviceService,
    private router:Router,private formBuilder: FormBuilder,public dialog: MatDialog) { 
    
    }

      
  ngOnInit(): void {
    this.employeeform = this.formBuilder.group({
      id:['',Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address:['',[Validators.required]],
      city:['',[Validators.required]],
      dob:['',[Validators.required]],
      mobile:['',[Validators.required]]
      
  });
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
    this.submitted = true;
    
    // stop the process here if form is invalid
    if (this.employeeform.invalid) {
        return;
    }
    else{
      this.saveEmployee();
      alert('SUCCESS!!');
    }

    
}
//     console.log(this.employee);
  
//     this.saveEmployee();
  
//   (error:any) =>{
//     //error
//     console.log(error)}
    
  

}

