import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  constructor() { }
  @Input() public tasks;
  ngOnInit() {
  }
  //for updation
  @Output() public updatetaskevent=new EventEmitter()

  public tobeupdated;
  update(id){
    for(var i=0;i<this.tasks.length;i++){
      if(id==this.tasks[i]._id){
        this.tobeupdated=i
        break
      }
    }
    this.updatetaskevent.emit(this.tasks[this.tobeupdated])

  }
//for delete
@Output() public deletetaskevent=new EventEmitter()
public tobedeleted;


  delete(id){
    for(var i=0;i<this.tasks.length;i++){
      if(id==this.tasks[i]._id){
        this.tobedeleted=i
        break
      }
    }
    this.deletetaskevent.emit(this.tasks[this.tobedeleted])

  }


  

}
