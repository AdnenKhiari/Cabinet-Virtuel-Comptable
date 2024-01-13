import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userFormGroup!: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      email: this.fb.control(''),
      password: this.fb.control('')
    })
  }

  handleLogin(): void {
    // Implement your login logic here
    let email = this.userFormGroup.value.email
    let password = this.userFormGroup.value.password
  }
}
