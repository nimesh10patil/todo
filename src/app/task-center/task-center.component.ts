import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-center',
  templateUrl: './task-center.component.html',
  styleUrls: ['./task-center.component.css']
})
export class TaskCenterComponent implements OnInit {

  constructor(private _taskservice:TasksService) { }
  public isloggedin;
  public tasks;
  ngOnInit() {
    this._taskservice.gettasks()
    .subscribe(data => this.tasks=data)
    this._taskservice.isloggedin()
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


//insert task
submitted(task){
  let tasklist=this.tasks
  this._taskservice.addtask(task)
  .subscribe(data=>{
    if(tasklist.length==0){
      this.tasks.push(data)
    }else{
      for(let i=0;i<tasklist.length;i++){
        if(tasklist[i].priority>=data.priority){
         for(let j=tasklist.length;j>i;j--){
           this.tasks[j]=this.tasks[j-1]
         }
         this.tasks[i]=data;
         this.showbutton=false
         break
        }
      }

    }

  })
}


//update task

  update(task){
    console.log("tasksjsjssxsjxsk")
    console.log(task)
    this._taskservice.puttasks(task)
    .subscribe(data => {console.log(data);
    })
    //make request
  }
//delete task
  delete(task){
    console.log("delete")
    console.log(task)
    let taskslist=this.tasks
    this._taskservice.deletetask(task)
    .subscribe(data=> {console.log(data);
    for(let i=0;i<taskslist.length;i++){
      if(taskslist[i]._id==data._id){
        this.tasks.splice(i,1)
      }
    }
    })
  }

}
