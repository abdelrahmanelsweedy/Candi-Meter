import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.sass']
})
export class InterviewComponent implements OnInit {
  InterviewForm!:FormGroup;
  displayedColumns: string[] = ['Question', 'description'];
  isVisible:boolean = false;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.InterviewsForm()
  }
  InterviewsForm(){
    this.InterviewForm=this.formBuilder.group({
      id:[''],
      description:['', [Validators.required]]
    })
  }
  onSubmit(){

  }
  changeVisibility(){
    this.isVisible = !this.isVisible
  }
}
