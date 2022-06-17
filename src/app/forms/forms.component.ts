import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({

  selector: 'app-forms',

  templateUrl: './forms.component.html',

  styleUrls: ['./forms.component.css']

})

export class FormsComponent implements OnInit {
  defaultCountry:string='india';
  country:any[]=['INDIA','PAKISTIAN','SRILANKA','AUS'];
  Froms = new FormGroup({
    Firstname : new FormControl('',Validators.required),
    Lastname :new FormControl('',Validators.required),
    Email : new FormControl('',[Validators.required,Validators.email]),
    Gender:new  FormControl('',Validators.required),
    
    



  })

  submitted():void{

    console.log("submitted successfully");

  }

  cancelled(){

    console.log("cancelled");

  }

  constructor() { }
  ngOnInit(): void {

  }

}

