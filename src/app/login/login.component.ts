import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm=this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  })
  constructor(private fb:FormBuilder,private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    var username = this.loginForm.value.username
    var pswd = this.loginForm.value.pswd
  
    if(this.loginForm.valid){
  
      this.ds.login(username,pswd)
      .subscribe((result:any)=>{
        if (result) {
          localStorage.setItem('currentUser',result.currentUser)
          localStorage.setItem('currentAcno',result.currentAcno)
          localStorage.setItem('token',result.token)
  
          alert(result.message)
          this.router.navigateByUrl('dashboard')
        }
      },
      result=> {
        alert(result.error.message)
      }
      )
      
    }
    else{
      alert("Invalid Form")
    } 
  }

}
