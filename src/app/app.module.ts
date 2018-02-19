import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Myservice } from "./myservice.service";
import {MatFormFieldModule} from '@angular/material/form-field';
// import { MaterialModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
// import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatDatepickerModule, MatNativeDateModule, DateAdapter } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import { RouterModule, Routes,Router } from '@angular/router';
import {AppRoutingModule} from './app.routing'
import {DashboardComponent} from './dashboard.component';
import{ LoginsComponent} from './logins.component';
// import { Router } from '@angular/router';
// import { Http } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatTooltipModule,
    AppRoutingModule,
    
    
    
   
  ],
  providers: [Myservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
