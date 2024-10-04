import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  formGroup!: FormGroup;

  constructor(
    private fb:FormBuilder,
  ){}

  ngOnInit(): void {
    this.initForm()
  }

  get f() {
    return this.formGroup.controls;
  }

  initForm() {
    this.formGroup = this.fb.group({
      email: [
        '',
       Validators.compose([
         Validators.required,
         Validators.email
        ])
      ],
      
    })
  }

}
