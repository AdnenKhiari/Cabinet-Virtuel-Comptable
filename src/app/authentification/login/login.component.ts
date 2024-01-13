import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthenticationService } from 'src/app/service/authentication-service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userFormGroup!: FormGroup
  errorMessage: any
  successMessage: any

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      email: this.fb.control(''),
      password: this.fb.control('')
    })
  }

  handleLogin(): void {
    let email = this.userFormGroup.value.email
    let password = this.userFormGroup.value.password
    this.authService.login(email, password).subscribe({
      next: User => {
        //this.authService.authenticateUser(User).subscribe({
        //next : ()=>{ implement the router here }
        this.successMessage = 'Login successful!'
        this.router.navigateByUrl('/tableau-de-bord');
      },
      error: err => {
        this.errorMessage = err
      }
    })
  }
}
