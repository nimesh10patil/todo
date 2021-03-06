import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { User } from './user';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }
  public registerurl="/user/register"
  public loginurl="user/login"
  public logout="user/login"
  public isloggedinurl="user/isloggedin"
  public logouturl="user/logout"

  userlogout(){
    return this._http.get(this.logouturl)
  }

  isloggedin():Observable<Boolean>{
    return this._http.get<Boolean>(this.isloggedinurl)
  }

  registeruser(user){
    return this._http.post(this.registerurl,user)
  }
  loginuser(user){
    return this._http.post(this.loginurl,user)
    .pipe(

      catchError(this.handle)
    );
  }
  handle(error:HttpErrorResponse){
    console.log("hiii")
    console.log(error.statusText);
    console.log(error.message)
    return error.message

  }


}
