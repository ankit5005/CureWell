import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDoctorComponent } from './ModuleCureWell/view-doctor/view-doctor.component';
import { LandingPageComponent } from './ModuleCureWell/landing-page/landing-page.component';
import { FooterComponent } from './ModuleCureWell/footer/footer.component';
import { LoginComponent } from './ModuleCureWell/login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import UpdateDoctorComponent from './ModuleCureWell/update-doctor/update-doctor.component';
import { ViewSpecializationComponent } from './ModuleCureWell/view-specialization/view-specialization.component';

const routes: Routes = [
{
   path: 'view-doctor',
   component:ViewDoctorComponent
}   ,
{
  path:'landing-page',
  component:LandingPageComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path: 'sign-up',
  component:SignUpComponent
},
{
  path: 'update-doctor',
  component:UpdateDoctorComponent
},
{
  path: 'view-specialization',
  component:ViewSpecializationComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
