import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import course from '../Modle/courseModle';
import skills from '../Modle/skillmodle';
import creators from '../Modle/creatorModle';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-addnewcourse',
  templateUrl: './addnewcourse.component.html',
  styleUrls: ['./addnewcourse.component.scss']
})
export class AddnewcourseComponent implements OnInit {

  courseData!:course;
  skillData:Array<skills>=[];
  creatorData:Array<creators>=[];
  form =new FormGroup({
    description:new FormControl("", Validators.required),
    prerequesite:new FormControl(""),
    feedback:new FormControl(""),
    location:new FormControl(""),
    skillname:new FormControl(""),
    creatorname:new FormControl("")
  })
  constructor(private myservice:MyserviceService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.courseData=new FormGroup({
      description:new FormControl(this.form.get("description")?.value, Validators.required),
      prerequesite:new FormControl(this.form.get("prerequesite")?.value),
      feedback:new FormControl(this.form.get("feedback")?.value),
      location:new FormControl(this.form.get("location")?.value)
    }).value

    this.skillData.push(new FormGroup({
      id:new FormControl(Math.floor(Math.random() *Date.now())),
      name:new FormControl(this.form.get("skillname")?.value) 
    }).value);
    this.creatorData.push(new FormGroup({
      id:new FormControl(Math.floor(Math.random() *Date.now())),
      name:new FormControl(this.form.get("creatorname")?.value) 
    }).value);
    this.courseData.skill=this.skillData;
    this.courseData.creator=this.creatorData;
    console.log(this.courseData);
    this.savedata();
  }

  savedata()
  {
    this.myservice.addnewcourse(this.courseData).subscribe(data=>{
      console.log(data);
      alert("data saved");
      this.form.reset();
    })
  }

}
