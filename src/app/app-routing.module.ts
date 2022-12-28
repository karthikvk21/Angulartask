import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AngularComponent } from './angular/angular.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  {path:'',redirectTo:'angular',pathMatch:'full'},
  {path:'angular',component:AngularComponent},
  {path:'registration-form',component:RegistrationFormComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contactus', component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
