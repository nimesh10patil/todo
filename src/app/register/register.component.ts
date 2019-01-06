import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

  //submiting form to usercenter
  @Output() public registerevent=new EventEmitter()
  submitted(user){
    this.registerevent.emit(user)

  }

}
