import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dboard',
  templateUrl: './dboard.component.html',
  styleUrls: ['./dboard.component.css']
})
export class DboardComponent implements OnInit {

user=""

  constructor(){}

  ngOnInit(): void{

    if(localStorage.getItem("username")){
      this.user=localStorage.getItem("username")  || ''
    }
  }
}
