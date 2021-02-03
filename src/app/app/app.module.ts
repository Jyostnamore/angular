import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { from } from 'rxjs';
import{MatButtonModule} from '@angular/material/button'
import { ManagerComponent } from './manager/manager.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './loginComponent/navbar/navbar.component';
import { HomeComponent } from './loginComponent/home/home.component';
import { LoginComponent } from './loginComponent/login/login.component';
import { DashboardComponent } from './loginComponent/dashboard/dashboard.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatDialogModule } from '@angular/material/dialog';
import{ConfirmationPopoverModule} from 'angular-confirmation-popover';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ConfirmationDialogueComponent } from './confirmation-dialogue/confirmation-dialogue.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    ManagerComponent,
    EmployeeViewComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    ConfirmationDialogueComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatIconModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule
   
    
    
    
    
  ],
  entryComponents: [
    ConfirmationDialogueComponent
  ],
  providers: [],
  bootstrap: [AppComponent,ConfirmationDialogueComponent]
})
export class AppModule { }
