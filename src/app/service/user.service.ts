import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = " http://localhost:3000/users";
  constructor(private http : HttpClient) {}

  public GetUser(){
    let myData=this.http.get<any>(this.apiUrl);
    return myData;
  }

  public GetUserByCode(code : any){
    let myData=this.http.get<any>(this.apiUrl + '/' + code);
    return myData;
  }

  addUser(user: any) {
    return this.http.post(this.apiUrl, user);
  }

  updateUser(userId: string, updatedUser: any){
    const updateUrl = `${this.apiUrl}/${userId}`;
    return this.http.put(updateUrl, updatedUser);
  }
  deleteUser(userId: number) {
    const deleteurl = `${this.apiUrl}/${userId}`; 
    return this.http.delete(deleteurl);
  }
}
