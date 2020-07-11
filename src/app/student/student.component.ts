import { Component, OnInit } from '@angular/core';
import { PgmcourseserviceService } from '../services/pgmcourseservice.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public name = 'Anusha';
 public pgmcourses = [] ;
 allStudentCards =Object;

  constructor(private _mypgmcoursesservice:PgmcourseserviceService) { }

  ngOnInit(): void {
   /*
    this._mypgmcoursesservice.getpgmcourses()
    .subscribe(data => this.pgmcourses =data);
  
  */
}
/*
getLatestStudentCards(){
  this._mypgmcoursesservice.getAllStudentCards().subscribe((response)=>{
    this.allStudentCards =response
  })

}*/

}