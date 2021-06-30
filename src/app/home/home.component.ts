import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../myservice.service';
import course from '../Modle/courseModle';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import Mail from '../Modle/Mail';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
SEARCH_NAME:String="";
MYCOURSE:Array<course>=[];
mymaildata!:Mail;
valueten=10;

  constructor(private myservice:MyserviceService,private route: Router) { }

  ngOnInit(): void {
      this.myservice.getallcourses().subscribe(data=>{
        console.log(data);
        this.MYCOURSE=data;
        console.log(this.MYCOURSE);
        this.valueten+=1;
        console.log(this.valueten);
      })
  }
  view(data:course){
    this.myservice.SHARED_DATA=data;
    this.route.navigate(['/Update'])

  }
  delete(id:number){
    this.myservice.deletebyid(id).subscribe(data=>{
      console.log(data);
      this.ngOnInit();
   })      
  }
  reset(){
    this.ngOnInit();
  }
  search(event :any)
  {
    this.SEARCH_NAME=event.target.value;
    console.log(this.SEARCH_NAME);
    if (this.SEARCH_NAME=="")
      {
          this.ngOnInit();
      }
      else
      {
          this.MYCOURSE=this.MYCOURSE.filter(res=>{
            return res.description.toLowerCase().trim().match(this.SEARCH_NAME.toLowerCase().trim());
          })
      }

  }
  addcourse()
  {
    this.route.navigate(['/Add'])
  }

  sendmail(data:course)
  {
      console.log(data);
      this.mymaildata=new FormGroup({
        subject:new FormControl(data.description+ "tranning created for you"),
        body:new FormControl("hii, "+ data.description+ "new course created for you. Course is created by "+data.creator+ "data "+data.lastupdated + "prerequisite for the traning is "+ data.prerequesite), 
      }).value
     this.myservice.sendmail(this.mymaildata).subscribe(data=>{
       alert("mail sent");
     })
  }

}
