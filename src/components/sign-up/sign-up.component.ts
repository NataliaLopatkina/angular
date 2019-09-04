import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
 
@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) 
    { }

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  show = false;

  showPassword(input) {
    input.type = input.type === 'password' ? 'text' : 'password';
    this.show = this.show = !this.show;
  }
}
