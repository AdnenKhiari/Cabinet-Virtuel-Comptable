import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthenticationService } from 'src/app/service/authentication-service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
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
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(6)]],
      civilite: ['', Validators.required],
      fonction: ['', Validators.required],
      secteur: ['', Validators.required],
      nomsociete: ['', Validators.required]
    })
  }

  handleSignup(): void {
    const user = this.userFormGroup.value

    if (user.password !== user.confirmpassword) {
      // Handle password mismatch error
      console.error('Password mismatch')
      return
    }

    this.authService.authenticateUser(user).subscribe({
      next: () => {
        this.router.navigateByUrl('/home')
      },
      error: err => {
        // Handle authentication error
        this.successMessage = 'signup successful!'
        this.errorMessage = err
      }
    })
  }
}
