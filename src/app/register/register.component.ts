import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _userservice:UserService ) { }
 public isloggedin;
  ngOnInit() {

    this._userservice.isloggedin()
    .subscribe(data => { this.isloggedin=data;
    console.log(data);
  console.log(typeof(data))})
  }
  public showbutton=false


  toggle(){
    if(this.showbutton){
      this.showbutton=false
    }
    else{
      this.showbutton=true

    }
  }

  //submiting form to usercenter
  @Output() public registerevent=new EventEmitter()
  submitted(user){
    this.showbutton=false

    this.registerevent.emit(user)

  }

}
