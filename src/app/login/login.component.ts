import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token : "Jagan"

  constructor(private router : Router) { }



  getSign(){
    // this.router.navigate(['/signup'])
     localStorage.setItem('token',this.token)
  }

  

  ngOnInit(): void {
  }

}
