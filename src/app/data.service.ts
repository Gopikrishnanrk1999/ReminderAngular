import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService { 
  
  db:any = {
    1000:{"acno":1000,"username":"Neer","password":1000,"balance":4000,transaction: []},
    1001:{"acno":1001,"username":"Lipin","password":1001,"balance":5000,transaction: []},
    1002:{"acno":1002,"username":"Girija","password":1002,"balance":2000,transaction: []},
    
  }



  constructor(private http:HttpClient) { }

  login(username: any, pswd: any) {
    const data={
      username,
      pswd
    }
    return this.http.post('http://localhost:3000/login',data)
  }
}
