import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { TopEmpoyeesPageComponent } from './top-empoyees-page/top-empoyees-page.component';

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
    path:"",
    component:TopEmpoyeesPageComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    GalleryPageComponent,
    TopEmpoyeesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
