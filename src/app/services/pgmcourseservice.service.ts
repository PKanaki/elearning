import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ipcourses } from '../pcourses';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PgmcourseserviceService {

  private _url:string="/assets/data/coursepgm.json"
  constructor(private http:HttpClient) {
   
}

getpgmcourses():Observable<Ipcourses>
{
  return this.http.get<Ipcourses>(this._url);
}
// or

getAllCoursestCards()
{
  return this.http.get(this._url);
}
}
