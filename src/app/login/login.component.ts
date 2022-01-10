import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  i:number = 0;
  max = 5;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: any[]=[];
  model: any = {};
  exp:string='';

  dataFromServer: any = [];
  expToken: any;
  tokenPayload: any;
  expirationDate: any;
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router: Router,private jwtHelper :JwtHelperService) { 
}
  
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
 
    }
 
  }


  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        data=this.jwtHelper.decodeToken(data['token'])
        this.tokenStorage.saveToken(data);
        this.tokenStorage.saveRefreshToken(data);
        this.tokenStorage.saveUser(data);
        
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
      // this.tokenStorage.setUser(data);
        console.log(data['token']);
        console.log(this.jwtHelper.decodeToken(data['token']));
       console.log(this.tokenPayload = JSON.stringify(this.jwtHelper.decodeToken(data.accessToken))) 
        // this.reloadPage();
        this.functionNr1();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  // reloadPage(): void {
  //  this.functionNr1()
   
  // }
 
  functionNr1() {
      
    console.log("Hello from functionNr1 before setTimeout in code");
    setTimeout (() => {
      // window.location.reload();
      
      this.router.navigate(['/#']);
      }, 5000);
 
 
  }
 
  
}
