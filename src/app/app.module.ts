import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrendsComponent } from './trends/trends.component';
import { HomeComponent } from './home/home.component';
import { AddnewcourseComponent } from './addnewcourse/addnewcourse.component';
import { UpdatecourseComponent } from './updatecourse/updatecourse.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-chartjs';




@NgModule({
  declarations: [
    AppComponent,
    TrendsComponent,
    HomeComponent,
    AddnewcourseComponent,
    UpdatecourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
