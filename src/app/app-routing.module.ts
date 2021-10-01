import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './components/courses/course-details/course-details.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';
import { PricingComponent } from './components/pricing/pricing.component';

const routes: Routes = [
  
  {path:'',component:HomeComponent , pathMatch:'full'},
  {path:'pricing',component:PricingComponent},
  {path:'courses', component:CoursesComponent},
  {path:'course/:id', component:CourseDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
