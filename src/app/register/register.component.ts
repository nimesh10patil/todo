import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
 @Input() public isloggedin;
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
    this.showbutton=false

    this.registerevent.emit(user)

  }

}
