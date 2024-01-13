import { Component,OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent  implements OnInit{
resetForm!:FormGroup 
constructor(private fb:FormBuilder){
  
}
ngOnInit():void{
  this.resetForm=this.fb.group({
    email:['',[Validators.required,Validators.email]]
  })
}
sendResetLink() {
console.log(this.resetForm?.value);
}
}
