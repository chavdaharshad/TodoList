import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  user=[{name:'string'}];

  constructor() { }
  
  ngOnInit(): void {
  }
  
  addData(uname: any) {
    console.log(uname.value);
      this.user.push({
        name:uname.value
      });
  }
  onDelete(item: number) {
    console.log(item);
   this.user.splice(item, 1)
  }
}
