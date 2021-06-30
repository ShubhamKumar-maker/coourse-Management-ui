import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { component } from 'vue/types/umd';
import {HomeComponent} from './home/home.component';
import {TrendsComponent} from './trends/trends.component';
import {AddnewcourseComponent}  from './addnewcourse/addnewcourse.component'
import { UpdatecourseComponent } from './updatecourse/updatecourse.component';

const routes: Routes = [
  {path:"", redirectTo:'Home', pathMatch:'full'},
  {path:'Home' ,component:HomeComponent},
  {path:'Trends',component:TrendsComponent},
  {path:'Trends',component:TrendsComponent},
  {path:'Add',component:AddnewcourseComponent},
  {path:'Update',component:UpdatecourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
