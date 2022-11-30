import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { TopEmpoyeesPageComponent } from './top-empoyees-page/top-empoyees-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { HttpClientModule} from '@angular/common/http';
import { ViewFriendsComponent } from './view-friends/view-friends.component';
import { ViewNavbarComponent } from './view-navbar/view-navbar.component';
import { ViewDashboardComponent } from './view-dashboard/view-dashboard.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { AddCourseComponent } from './add-course/add-course.component'

const myRoutes:Routes=[
  {
    path:"home",
    component:HomePageComponent
  },
  {
    path:"about",
    component:AboutPageComponent
  },
  {
    path:"gallery",
    component: GalleryPageComponent
  },
  {
    path:"top",
    component:TopEmpoyeesPageComponent
  },
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"course",
    component:ViewCoursesComponent
  },
  {
    path:"friends",
    component:ViewFriendsComponent
  },
  {

    path:"employee",
    component:EmployeeLoginComponent
  },
  {
    path:"dash",
    component:ViewDashboardComponent
  },
  {
    path:"signup",
    component:EmployeeRegisterComponent
  },
  {
    path:"dash",
    component:ViewDashboardComponent 
  },
  {
    path:"add",
    component:AddCourseComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    GalleryPageComponent,
    TopEmpoyeesPageComponent,
    AdminLoginComponent,
    AdminNavbarComponent,
    ViewCoursesComponent,
    ViewFriendsComponent,
    ViewNavbarComponent,
    ViewDashboardComponent,
    EmployeeLoginComponent,
    EmployeeRegisterComponent,
    AddCourseComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
