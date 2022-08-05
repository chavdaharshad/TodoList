import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  contentObj: Task = new Task();
  contentArr: Task[] = [];

  addcontentValue: string = '';
  editcontentValue: string = '';
  constructor(private crudservice: CrudService) { }

  ngOnInit(): void {
    this.editcontentValue = '';
    this.addcontentValue = '';
    this.contentObj = new Task();
    this.getData();
  }
  getData() {
    this.crudservice.getData(this.contentObj).subscribe(res => {
      this.contentArr = res
    }, err => {
      alert("unble");
    });
  }

  addData() {
    this.contentObj.content_name = this.addcontentValue;
    this.crudservice.addData(this.contentObj).subscribe(res => {
        this.ngOnInit();
        this.addcontentValue = '';
    }, err => {
      alert(err);
    })
  }

  editData() {
    this.contentObj.content_name = this.editcontentValue;
    this.crudservice.editData(this.contentObj).subscribe(res => {
      this.ngOnInit();
    }, err => {
      alert("failes");
    })
  }


  deleteData(content: Task) {
    this.crudservice.deleteData(content).subscribe(res => {
      this.ngOnInit();
    }, err => {
      alert("failes");
    })
  }

  call(content: Task) {
    this.contentObj = content;
    this.editcontentValue = content.content_name
  }
}

