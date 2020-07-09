import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TcardService {

 
  constructor(private http:HttpClient) { }
  createTutorCards(user){
    return this.http.post("http://localhost:3000/user",user);
  }
  getAllTutorCards(){
    return this.http.get("http://localhost:3000/user");
  }
}
