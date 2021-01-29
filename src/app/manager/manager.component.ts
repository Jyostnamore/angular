import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Manager } from '../manager';
import { ManagerserviceService } from '../managerservice.service';
import { FormGroup,  FormBuilder,Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  hide = true;
  managerform!: FormGroup;
    submitted = false;
manager:Manager=new Manager();
  constructor(private managerser:ManagerserviceService,
    private router:Router,private formBuilder: FormBuilder) { }


    saveEmployee()
    {
      this.managerser.createEmployee(this.manager).subscribe(data =>{
        console.log(data);
        
      },
      error=>console.log(error));
     
    }
  ngOnInit(): void {
    this.managerform = this.formBuilder.group({
      id:['',Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password:['',[Validators.required]],
      dob:['',[Validators.required]],
      address:['',[Validators.required]],
      cname:['',[Validators.required]]
      
  });
  }
 onSubmit()
 {
  // console.log(this.manager);
  // this.saveEmployee();
  this.submitted = true;
    
  // stop the process here if form is invalid
  if (this.managerform.invalid) {
      return;
  }
  else{
    this.saveEmployee();
    alert('Manager Registration SUCCESS!!<h1>now you</h1>');
  }
 }
}
