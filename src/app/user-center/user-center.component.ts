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
  public isloggedin;
  ngOnInit() {
    this.registeredmessage=false
    this.hideusercenter=false
    this._userservice.isloggedin()
    .subscribe(data => { this.isloggedin=data;
    console.log(data);
  console.log(typeof(data))})
    

  }

  //logout

  logout(){
    this._userservice.userlogout()
    .subscribe(data =>{ console.log(data);
    })
  }



  register(user){
    console.log("hhhh ")
    this._userservice.registeruser(user)
    .subscribe(data => {console.log(data);
      this.registeredmessage=true})
}
  public loginerror=false
  login(userform){
    console.log("inside userform submitter")
    this._userservice.loginuser(userform)
    .subscribe(data => {
    if(typeof(data)==="object"){
      //no error
      this.hideusercenter=true
      this.isloggedin=true
      this.loginerror=false

      this.router.navigate(['tasks']);
      console.log("no error")
  
      }else{
        this.loginerror=true
          console.log("error")}
      })
}



}
