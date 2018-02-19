import { Component } from '@angular/core';
import { Myservice } from "./myservice.service";
import {person} from "./person";
import {user} from "./user";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private myservice: Myservice) { 


  }

  ngOnInit() {

   }
  
   
   

}
