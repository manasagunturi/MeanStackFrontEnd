import { Component, OnInit } from '@angular/core';
// import { type } from 'os';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  type:string="password";
  isText : boolean=false;
  eyeIcon: string="fa-eye-slash";
  loginForm!:FormGroup;

  constructor(private fb:FormBuilder, private service:UserServiceService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
    })
    this.service.getData().subscribe((res:any)=>{
      console.log(res);
      
    })
  }
  hideShowPass(){
    this.isText=!this.isText;
    this.isText ? this.eyeIcon ="fa-eye" : this.eyeIcon ="fa-eye-slash";
    this.isText ? this.type ="text" : this.type ="password";
  }
  signIn(){
    let data={
      email:this.loginForm.value.email,
      password:this.loginForm.value.password
    }
    this.service.userLogin(data).subscribe((res:any)=>{
      console.log(res);
      this.router.navigate(['/profile'])
      
    })
  }
}
