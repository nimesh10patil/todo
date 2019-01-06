import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-user-center',
  templateUrl: './user-center.component.html',
  styleUrls: ['./user-center.component.css']
})
export class UserCenterComponent implements OnInit {

  constructor(private _userservice:UserService,private router: Router) { }
  public registeredmessage
  public hideusercenter

  ngOnInit() {
    this.registeredmessage=false
    this.hideusercenter=false
  }



  register(user){
    console.log("hhhh ")
    this._userservice.registeruser(user)
    .subscribe(data => {console.log(data);
      this.registeredmessage=true})
}

  login(userform){
    console.log("inside userform submitter")
    this._userservice.loginuser(userform)
    .subscribe(data => {
    if(typeof(data)==="object"){
      //no error
      this.hideusercenter=true
      this.router.navigate(['tasks']);
      console.log("no error")
  
      }else{
          console.log("error")}
      })
}



}
