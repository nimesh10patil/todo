import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Task } from './task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private _http:HttpClient) { }
  public addurl="task/add"
  public geturl="task/get"
  public puturl="task/edit/"
  public deleteurl="task/delete/"

  public isloggedinurl="user/isloggedin"

  isloggedin():Observable<Boolean>{
    return this._http.get<Boolean>(this.isloggedinurl)
  }

  addtask(task):Observable<Task>{
    return this._http.post<Task>(this.addurl,task)
  }

  gettasks(){
    return this._http.get(this.geturl)
  }

  puttasks(task){
    return this._http.put(this.puturl+task._id,task)
  }

  deletetask(task):Observable<Task>{
    return this._http.delete<Task>(this.deleteurl+task._id)
  }

}
