import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _userservice:UserService,private router: Router) { }
 @Input() public isloggedin;
  ngOnInit() {
  }
  public showbutton=false

  logout(){
    this._userservice.userlogout()
    .subscribe(data =>{ console.log("hiii");
      this.isloggedin=false
      this.router.navigate(['']);
    })
  }


  toggle(){
    if(this.showbutton){
      this.showbutton=false
    }
    else{
      this.showbutton=true

    }
  }

  //send form to user-center
  @Output() public loginevent=new EventEmitter()
  submitted(user){
    this.loginevent.emit(user)

  }

}
