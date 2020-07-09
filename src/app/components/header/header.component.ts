import { DashcoursesService } from './../../services/dashcourses.service';
import { AuthserviceService } from './../../services/authservice.service';

import { Component, OnInit } from '@angular/core';
import { TcardService } from 'src/app/tcard.service';
import { PgmcourseserviceService } from 'src/app/services/pgmcourseservice.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLoggedin = true;
  public myusers = [];
  public mycourses = [];

  public showModal = null;
  public showModals = null;
  public name = 'Anusha';
  allTutorCards:Object;
  allStudentCards:Object;

  allProgramCards :Object; 
  constructor(private _myService: AuthserviceService, private _coursesService: DashcoursesService,private tCardsService:TcardService,private _pgmcourseService:PgmcourseserviceService ) {}

  ngOnInit(): void {
    this._myService.getuserData()
    .subscribe(data => this.myusers = data);
    this._coursesService.getCourses()
    .subscribe(data => this.mycourses = data);
  }
  
  showModel(){
    this.showModal = true;
  }
  showModels(){
    this.showModals = true;
  }


  url =""
selectFile(event){
if(event.target.files){
  var reader =new FileReader()
  reader.readAsDataURL(event.target.files[0])
  reader.onload = (event:any) => {
    this.url=event.target.result
  }
}
}

onselectFile(e){
  if(e.target.files){
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=(event:any)=>{
      this.url =event.target.result;
    }
  }
}
  addUser(formObj){
    console.log(formObj)
    this.tCardsService.createTutorCards(formObj).subscribe((response)=>{
     console.log("Tutor Cards added")
     this.getLatestTutorCards();
    })
  }
  getLatestTutorCards(){
    this.tCardsService.getAllTutorCards().subscribe((response)=>{
      this.allTutorCards =response
    })
  }

  getLatesStudentCards(){
    this._pgmcourseService.getAllStudentCards().subscribe((response)=>{
      this.allStudentCards =response
    })
  }
   
  
}
