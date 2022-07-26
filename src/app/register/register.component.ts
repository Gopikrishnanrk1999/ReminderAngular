import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm=this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    Email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9@.]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  })
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
