import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'login';
  
  data = {username:"",password:""};
  constructor(private router: Router)
  {
    this.data = {username:"",password:""};
  }
  onClicking()
  {
    if(this.data.username == this.data.password)
    {
      this.router.navigate(['/dashboard']);

  	}else{
  		alert('username / password is not correct.');
  	}
  }
  
  onAboutus()
  {
    this.router.navigate(['/aboutus']);
  }
}
