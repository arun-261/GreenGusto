import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  // api call for login
  login(uname:any, pswd:any){
    const body={
      uname,
      pswd
    }
    return this.http.post('http://localhost:3000/login',body)
  }

   // api call for login
   register(uname:any, pswd:any, email:any, phone:any){
    const body={
      uname,
      pswd,
      email,
      phone
    }
    return this.http.post('http://localhost:3000/register',body)
  }

  // api call for getAllPlats
  getAllPlants(){
   return this.http.get('http://localhost:3000/dashboard')
  }
}
  
