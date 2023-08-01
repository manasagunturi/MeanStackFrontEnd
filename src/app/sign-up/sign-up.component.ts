import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { UserServiceService } from '../user-service.service';
// import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  type:string="password";
  isText : boolean=false;
  eyeIcon: string="fa-eye-slash";
  registerForm!: FormGroup;
  constructor(private fb:FormBuilder,private service:UserServiceService) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      userName:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      phone:['',[Validators.required]],
      // username:['',[Validators.required]],
    })
    //this.getUserData();
  }
  hideShowPass(){
    this.isText=!this.isText;
    this.isText ? this.eyeIcon ="fa-eye" : this.eyeIcon ="fa-eye-slash";
    this.isText ? this.type ="text" : this.type ="password";
  }

  registerData(){
    console.log(this.registerForm.value,"form value")

     let param={
      firstName:this.registerForm.value.firstName,
      lastName:this.registerForm.value.lastName,
      userName:this.registerForm.value.userName,
      email:this.registerForm.value.email,
      password:this.registerForm.value.password,
      phone:this.registerForm.value.phone

    }
this.service.postRegisrData(param).subscribe(res=>{
  console.log(res)
  if(res.success==true && res.user){
    alert("successfully user Registered")
  }else{
    alert("something went wrong")
  }
})
  }
  getUserData(){
    this.service.getData().subscribe((res:any)=>{
      console.log(res)
      
    })
  }
}
