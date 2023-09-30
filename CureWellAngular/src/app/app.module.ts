import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './ModuleCureWell/navbar/navbar.component';
import { LandingPageComponent } from './ModuleCureWell/landing-page/landing-page.component';
import { FooterComponent } from './ModuleCureWell/footer/footer.component';
import { ViewDoctorComponent } from './ModuleCureWell/view-doctor/view-doctor.component';
import { LoginComponent } from './ModuleCureWell/login/login.component';
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ViewSpecializationComponent } from './ModuleCureWell/view-specialization/view-specialization.component';
import { ViewTodaySurgeryComponent } from './ModuleCureWell/view-today-surgery/view-today-surgery.component';
import UpdateDoctorComponent from './ModuleCureWell/update-doctor/update-doctor.component'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    FooterComponent,
    ViewDoctorComponent,
    LoginComponent,
    SignUpComponent,
    ViewSpecializationComponent,
    ViewTodaySurgeryComponent,
    UpdateDoctorComponent,
    
    
  
  ],
  imports: [
    BrowserModule,FormsModule, ReactiveFormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
