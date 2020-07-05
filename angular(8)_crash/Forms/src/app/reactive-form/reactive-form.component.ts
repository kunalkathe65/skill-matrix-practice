import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  signupForm: FormGroup;
  forbiddenNames = ['Kunal', 'kunal'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.checkForUsernames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.asyncCheckForEmail)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]) //can define default control here
    })

    this.signupForm.valueChanges.subscribe((value) => console.log(value));
    this.signupForm.statusChanges.subscribe((status) => console.log(status));

    this.signupForm.setValue({
      'userData': {
        'username': 'Kunal',
        'email': "kk@yahoo.com"
      },
      'gender': 'male',
      'hobbies': []
    })

    this.signupForm.patchValue({
      'userData': {
        'username': 'Kunal'
      },
    })

  }

  onSubmit() {
    console.log(this.signupForm);
    // this.signupForm.reset();
    this.signupForm.controls['gender'].reset() //resetting only gender field
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  onRemoveHobby(index: number) {
    (<FormArray>this.signupForm.get('hobbies')).removeAt(index);
  }

  //CUSTOM VALIDATOR(SYNCHRONOUS)
  checkForUsernames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenNames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true };
    } else {
      return null;
    }

  }

  //CUSTOM VALIDATOR(ASYNCHRONOUS)
  asyncCheckForEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ 'emailIsForbidden': true })
        } else {
          resolve(null);
        }
      }, 2000)
    })
  }
}

