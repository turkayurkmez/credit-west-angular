import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  constructor(private builder: FormBuilder) {}

  categoryForm: FormGroup;

  ngOnInit(): void {
    this.categoryForm = this.builder.group({
      categoryName: ['', Validators.required],
    });
  }

  checkIsEmpty(): boolean | undefined {
    return (
      this.categoryForm.get('categoryName')?.hasError('required') &&
      this.categoryForm.get('categoryName')?.dirty
    );
  }

  add(){
    if (this.categoryForm.valid) {
      console.log(this.categoryForm.value);
    }
  }
}
