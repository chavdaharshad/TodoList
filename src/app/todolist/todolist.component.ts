import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  user=[''];

  constructor(private router:Router,private http:HttpClient) { }
  
  ngOnInit(): void {
    this.user=[]
  }
  addData(uname: any ) {
    console.log(uname.value);
      this.user.push(uname.value);
        this.http.post('http://localhost:3000/User',uname.value)
        .subscribe(res => {
          alert("successfull");
        });
      
  }
  onDelete(item: number) {
    console.log(item);
   this.user.splice(item, 1)
  }
}
