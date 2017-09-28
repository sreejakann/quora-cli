import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _userService:UserService) { }

  ngOnInit() {
  }
  loginUser(e) {
  	e.preventDefault();
  	console.log(e);
  	var username = e.target.elements[0].value;
  	var password = e.target.elements[1].value;
  	
  	if(username == 'admin' && password == 'admin') {
      //this.user.setUserLoggedIn();
  		//this.router.navigate(['dashboard']);
  	}
  }
}

// import { RouterModule, Routes, Router } from '@angular/router';
// import {UserService, AlertService} from './_services/index';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {


//   model: any = {};
//   loading = false;

//   constructor(
//       private router: Router,
//       private userService: UserService,
//       private alertService: AlertService) { }

//   register() {
//       this.loading = true;
//       this.userService.create(this.model)
//           .subscribe(
//               data => {
//                   this.alertService.success('Registration successful', true);
//                   this.router.navigate(['/home']);
//               },
//               error => {
//                   this.alertService.error(error);
//                   this.loading = false;
//               });
//   }

//  // constructor() { }

//  // ngOnInit() {
//  // }
//  // loginUser(e) {
//  // 	e.preventDefault();
//  // 	console.log(e);
//  // 	var username = e.target.elements[0].value;
//  // 	var password = e.target.elements[1].value;
  	
//  // 	if(username == 'admin' && password == 'admin') {
//  //     //this.user.setUserLoggedIn();
//  // 		//this.router.navigate(['dashboard']);
// //   	}
// //   }
// }



