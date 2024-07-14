import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-advanced-forms',
  templateUrl: './advanced-forms.component.html',
  styleUrls: ['./advanced-forms.component.css'],
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule]
})
export class AdvancedFormsComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, this.customValidator]],
      email: ['', [Validators.required, Validators.email]],
      phones: this.fb.array([this.fb.control('')])
    });
  }

  get phones(): FormArray {
    return this.myForm.get('phones') as FormArray;
  }

  addPhone(): void {
    this.phones.push(this.fb.control(''));
  }

  removePhone(index: number): void {
    this.phones.removeAt(index);
  }

  customValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value && value.length < 5) {
      return { customError: 'Name must be at least 5 characters long' };
    }
    return null;
  }

  asyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    const value = control.value;
    return of(value).pipe(
      map(val => val.includes('test') ? { asyncError: 'Value cannot include "test"' } : null)
    );
  }

  onSubmit(): void {
    console.log(this.myForm.value);
  }
}
