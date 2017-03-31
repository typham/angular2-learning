import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  formCategory;
  constructor(private fb:FormBuilder) { }

  ngOnInit(
  ) {
    this.formCategory = this.fb.group({
      Name:['',Validators.required],
      Description: ''
    });
  }

  save(){
    console.log(this.formCategory);
  }

}
