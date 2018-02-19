import { Component } from '@angular/core';
import { Myservice } from "./myservice.service";
import { person } from "./person";
import { user } from "./user";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { Http } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent {
  value: string;
  title = '';
  value2: string;
  value3: string;
  flag: boolean = false;
  flag1: boolean = false;
  flag2: boolean = true;
  flag3: boolean;
  s=true;
  showbutton:boolean=true;
  public returnString: any;
  public returnString1: any;
  person = new person();
  persons: any[];
  user = new user();
  genders = [
    { value: 'Gender', viewValue: '' },
    { value: 'male', viewValue: 'male' },
    { value: 'female', viewValue: 'female' }
  ];
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  constructor(private router: Router, private myservice: Myservice) {
    window.onclick = function (event) {
      if (!(<HTMLInputElement>event.target).matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }

  }

  ngOnInit() {

  }
  myFunction() {

    this.myservice.addUser(this.user).subscribe(data => {
      this.returnString1 = data;
      console.log(this.returnString1);
      if (this.returnString1 == "Customer Inserted Successfully") {
       alert("success")
        this.router.navigate(['/logins']);
        
      }

    });

   var a = document.forms["myForm"]["id"].value;
   if(a==""){
     alert("enter id");
     return false;
   }

    var b = document.forms["myForm"]["name"].value;
   if(b==""){
     alert("enter name");
     return false;
   }

   
  var c = document.forms["myForm"]["dob"].value;
   if(c==""){
     alert("enter date of birth");
     return false;
   }


    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
      this.flag2 = false;
      alert("Not a valid e-mail address");


    }
  }


  //  update(){
  //   //  this.person.id="2";
  //   //  this.person.name="bh";
  //   //  console.log(this.person.id);
  //       this.myservice.update(this.person).subscribe(data => {

  //   });
  //  }

  // delete() {
  //   //  this.person.id="2";
  //   //  this.person.name="bh";
  //   //  console.log(this.person.id);
  //   this.myservice.delete(this.person).subscribe(data => {

  //   });
  // }
  onLoginSubmit() {
    this.myservice.login(this.user).subscribe(data => {
      // this.returnString = data;
      console.log(data);

      // if (this.returnString == "Welcome USer") {
        this.myservice.user = data;
        this.myservice.user_email = this.user.email;
        this.router.navigate(['/dashboard']);
       
      // }

    });



    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
      alert("Not a valid e-mail address");
      this.flag1 = true;
    }

  }
  newUserclick() {
    this.s=false;
    this.value3 = "show";
  
    
  }

  doalert() {
    this.flag = !this.flag;
  }

}
