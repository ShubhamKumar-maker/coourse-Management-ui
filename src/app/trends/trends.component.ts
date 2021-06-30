import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import course from '../Modle/courseModle';
import { groupBy } from 'rxjs/internal/operators/groupBy';




@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})

export class TrendsComponent implements OnInit {
 selectedName!:string;
 MYCOURSE:Array<course>=[];
 groupbydata:Array<String>=[];
 groupbyvalue:Array<number>=[];
 result={};
 mydata={};

  constructor(private myservice:MyserviceService) { }

  ngOnInit(): void {
    this.myservice.groupdata("location").subscribe(data=>{
      this.mydata=data;
     console.log(this.mydata);
    });
    this.myservice.getallcourses().subscribe(data=>{
      this.MYCOURSE=data;
      
    })
  }

getdata(column:string)
{
  //var result;
  if(column=="location")
  this.result = this.MYCOURSE.reduce((a, c) => (a[c.location] = (a[c.location] || 0) + 1, a), Object.create(null));
  else if(column=="description")
  this.result = this.MYCOURSE.reduce((a, c) => (a[c.description] = (a[c.description] || 0) + 1, a), Object.create(null));

  console.log("result")
 this.mydata=JSON.stringify(this.result);
  console.log(JSON.stringify(this.result));
 
}
changefun(){
  this.getdata(this.selectedName);
  console.log(this.selectedName);

}

 


}
