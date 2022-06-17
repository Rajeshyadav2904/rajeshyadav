import { STRING_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindingdemo',
  templateUrl: './bindingdemo.component.html',
  styleUrls: ['./bindingdemo.component.css']
})
export class BindingdemoComponent implements OnInit {
  
  Id:number=1;

     username:string='rajesh';

     cityname:string='hyderabad';

     display():void{

      console.log("data saved")

     }

  constructor() {
    
    
   }

  ngOnInit(): void {
  }

}


