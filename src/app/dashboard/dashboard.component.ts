import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit{

  allPlants:any=[]
  constructor(private api:ApiService){}

  ngOnInit(): void{
    this.api.getAllPlants().subscribe(
    (data:any)=>{
     this.allPlants=data.result
    })
  }
}
