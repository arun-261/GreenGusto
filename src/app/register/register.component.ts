import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  
  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    email:['',[Validators.required,Validators.email]],
    phone:['',[Validators.required,Validators.pattern('[0-9]*')]]

  })
  constructor(private fb:FormBuilder , private api:ApiService, private router:Router){}

  ngOnInit(): void {
    
  }
  
  register(){
        
    
    if(this.registerForm.valid){
      let uname=this.registerForm.value.uname
      let pswd= this.registerForm.value.pswd
      let email=this.registerForm.value.email
      let phone=this.registerForm.value.phone
      this.api.register(uname,pswd,email,phone)
      .subscribe((result:any)=>{
        console.log(result);
        alert(result.message)
        setTimeout(()=>{
          this.router.navigateByUrl('login')
        })
        
      })
      // .subscribe((result:any)=>{
      //   console.log(result);

        // this.msg=result.message
        // alert(result.message)
        
       
        
      
    }
   else{
    alert('Invalid Form')

   }
    
  }
}
