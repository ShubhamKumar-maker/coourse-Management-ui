import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import course from './Modle/courseModle';
import Mail from './Modle/Mail';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  GET_ALL_COURSE="/test/getcourses";
  UPDATE_COURSE="/test/courses-update/";
  DELETE_COURSE="/test/course-delete/";
  GET_COURSE_BY_ID="/test/getcourse/";
  SAVE_NEW_COURSE="/test/courses-add";
  GROUP_BY_DATA="/test/groupbydata/";
  SEND_MAIL="/test/sendmail";
  SHARED_DATA!:course;

  constructor(private http:HttpClient) { }

  getallcourses():Observable<any>
  {
    return this.http.get(this.GET_ALL_COURSE);
  }
  getcoursebyid(id:BigInteger):Observable<any>{
    return this.http.get(this.GET_COURSE_BY_ID+id);
  }
  deletebyid(id:number):Observable<any>{
    return this.http.delete(this.DELETE_COURSE+id);
  }
  updatecourse(data:course,id:number):Observable<any>{
    return this.http.put(this.UPDATE_COURSE+id,data);
  }
  addnewcourse(data:course):Observable<any>{
    return this.http.post(this.SAVE_NEW_COURSE,data);
  }

  groupdata(columnname:String):Observable<any>{
    return this.http.get(this.GROUP_BY_DATA+columnname);
  }

  sendmail(maildata:Mail):Observable<any>{
    return this.http.post(this.SEND_MAIL,maildata);
  }
}
