import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import skills from '../Modle/skillmodle';
import creators from '../Modle/creatorModle';
import course from '../Modle/courseModle';

@Component({
  selector: 'app-updatecourse',
  templateUrl: './updatecourse.component.html',
  styleUrls: ['./updatecourse.component.scss']
})
export class UpdatecourseComponent implements OnInit {
  courseData!:course;
    skills:Array<skills>=[];
    creatorData:Array<creators>=[];
  form =new FormGroup({
    id:new FormControl(""),
    description:new FormControl("", Validators.required),
    prerequesite:new FormControl(""),
    feedback:new FormControl(""),
    location:new FormControl(""),
    creatorname:new FormControl(""),
    skillname:new FormControl(""),
    
  })
  constructor(private myservice:MyserviceService) { }

  ngOnInit(): void {
    this.skills=this.myservice.SHARED_DATA.skill;
    this.form.get('description')?.setValue(this.myservice.SHARED_DATA.description);
    this.form.get('prerequesite')?.setValue(this.myservice.SHARED_DATA.prerequesite);
    this.form.get('feedback')?.setValue(this.myservice.SHARED_DATA.feedback);
    this.form.get('location')?.setValue(this.myservice.SHARED_DATA.location);
    this.form.get('prerequesite')?.setValue(this.myservice.SHARED_DATA.prerequesite);
  }
  onSubmit(){
    this.courseData=new FormGroup({
      description:new FormControl(this.form.get("description")?.value, Validators.required),
      prerequesite:new FormControl(this.form.get("prerequesite")?.value),
      feedback:new FormControl(this.form.get("feedback")?.value),
      location:new FormControl(this.form.get("location")?.value)
    }).value;
    this.courseData.id=this.myservice.SHARED_DATA.id;
    this.courseData.creator=this.myservice.SHARED_DATA.creator;
    this.courseData.skill=this.myservice.SHARED_DATA.skill;
    console.log(this.courseData);
    this.update(this.myservice.SHARED_DATA.id);
  }


  update(id:number)
  {
        this.myservice.updatecourse(this.courseData,id).subscribe(data=>{
          console.log(data);
          alert("course updated");
        })
        //console.log(this.courseData);
  }
}
