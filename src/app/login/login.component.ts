import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

     eMsg=""
     msg=""
  constructor(private fb:FormBuilder , private api:ApiService, private router:Router) { }
  ngOnInit(): void {
  }
  login(){
        
    
    if(this.loginForm.valid){
      let uname=this.loginForm.value.uname
      let pswd= this.loginForm.value.pswd
      this.api.login(uname,pswd)
      .subscribe((result:any)=>{
        console.log(result);
        localStorage.setItem("username",result.uname)

        this.msg=result.message
        // alert(result.message)
        setTimeout(()=>{
          this.router.navigateByUrl('dboard')
        },1000)
       
        
      },
      (result:any)=>{
        this.eMsg=result.error.message
 
      }
      )
    }
   else{
    alert('Invalid Form')

   }
    
  }
  
}