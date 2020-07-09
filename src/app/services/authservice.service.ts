import { Iuser } from './../user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private url: string = "./assets/data/userdata.json";

  constructor(private http: HttpClient) {}

  getuserData(): Observable<Iuser[]>{
    return this.http.get<Iuser[]>(this.url);
  }

}
