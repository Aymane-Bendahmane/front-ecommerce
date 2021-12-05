import { Component, OnInit } from '@angular/core';
import {ManagerService} from "../../services/ManagerService/manager.service";

@Component({
  selector: 'app-my-commands',
  templateUrl: './my-commands.component.html',
  styleUrls: ['./my-commands.component.css']
})
export class MyCommandsComponent implements OnInit {
  public commands: any;

  constructor(private service:ManagerService) { }

  ngOnInit(): void {
    this.getMyCommands()
  }
  getMyCommands(){
      this.service.mycommands().subscribe(com =>{
        this.commands = com
      })
  }
}
