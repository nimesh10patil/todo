import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

  //send form to user-center
  @Output() public loginevent=new EventEmitter()
  submitted(user){
    this.loginevent.emit(user)

  }

}
