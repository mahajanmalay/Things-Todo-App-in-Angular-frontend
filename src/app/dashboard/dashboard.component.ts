import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userName="Malay Mahajan";
  tasks:any = [
    {
      title : "Exercise for 30 min",
      date : "22/7/2022"
    },
    {
      title : "meditation for 15 min",
      date : "22/7/2022"
    },
    {
      title : "Reading for 20 min",
      date : "22/7/2022"
    },
    {
      title : "Reading for 20 min",
      date : "22/7/2022"
    },
    {
      title : "Reading for 20 min",
      date : "22/7/2022"
    },
    {
      title : "Reading for 20 min",
      date : "22/7/2022"
    }
  ]
  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {

  }

  openAddDialog(){
    this.matDialog.open(AddTaskComponent)
  }

  deleteClick(){
    confirm("Are you sure to delete");
  }

  addToImpClick(){
    confirm("Conform to add to important");
  }

  markAsComplete(){
    confirm("Confirm to mark as complete");
  }

}
