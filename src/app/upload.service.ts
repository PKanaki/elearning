import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http:HttpClient) { }
  createUploaData(uservideo){
    return this.http.post("http://localhost:8080/uservideo",uservideo);
  }
  getAllUploaData(){
    return this.http.get("http://localhost:8080/uservideo");
  }

}
