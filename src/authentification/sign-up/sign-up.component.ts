export {};
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z]{0,11}$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z]{0,11}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      c_password: ['', Validators.required],
      civilite: [''],
      fonction: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z]{0,11}$/)]],
      secteur: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z]{0,11}$/)]],
      nomSociete: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z]{0,11}$/)]],
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password').value;
    const confirmPassword = group.get('c_password').value;
    return password === confirmPassword ? null : { notMatch: true };;
}
}