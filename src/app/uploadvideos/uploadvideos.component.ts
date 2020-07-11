import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-uploadvideos',
  templateUrl: './uploadvideos.component.html',
  styleUrls: ['./uploadvideos.component.css']
})
export class UploadvideosComponent implements OnInit {

  allUploadvideo:Object
  constructor(private _uploadService:UploadService) { }

  ngOnInit(): void {
  }
 
  url =""
  selectFile(event)
  {
  if(event.target.files)
  {
    var reader =new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload = (event:any) =>
     {
      this.url=event.target.result
     }
  }
  
  }

  addUploadData(formObj){
    console.log(formObj)
    this._uploadService.createUploaData(formObj).subscribe((response)=>{
      this.getLatestVideos();
    })
  }
  getLatestVideos(){
    this._uploadService.getAllUploaData().subscribe((response)=>{
      this.allUploadvideo =response
    })
  }
}
