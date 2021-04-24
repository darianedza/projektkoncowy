import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-space-ship',
  templateUrl: './space-ship.component.html',
  styleUrls: ['./space-ship.component.css']
})
export class SpaceShipComponent implements OnInit {
  
  spaceShip={
    modelname:'Boeing',
    imageUrl:'/assets/statek.jpg',
    health:75
  }

  constructor() { }

  ngOnInit(): void {
  }

}
