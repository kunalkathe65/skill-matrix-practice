import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  defaultColor = "Blue";
  answer = '';
  user = {
    email: '',
    color: '',
    password: '',
    gender: '',
    hobby: [],
    city: '',
    answer: ''
  }

  @ViewChild('loginForm', { static: false }) loginForm: NgForm;

  // onSubmit() {
  //   console.log(this.loginForm);
  // }

  // onPatchGender() {
  //   this.loginForm.form.patchValue({
  //     userData: {
  //       gender: 'male'
  //     }
  //   })
  // }
  ngOnInit() {
    setTimeout(() => {
      this.loginForm.form.patchValue({
        userData: {
          gender: 'male',
          singing: true
        }
      })
    })

  }
  onSubmit() {
    // console.log(this.loginForm.value.userData.email);
    this.user.email = this.loginForm.value.userData.email;
    this.user.color = this.loginForm.value.userData.color;
    this.user.password = this.loginForm.value.userData.password_1;
    this.user.gender = this.loginForm.value.userData.gender;
    this.loginForm.value.userData.painting === true && this.user.hobby.push("painting");
    this.loginForm.value.userData.dancing === true && this.user.hobby.push("dancing");
    this.loginForm.value.userData.singing === true && this.user.hobby.push("singing");
    this.user.city = this.loginForm.value.userData.city;
    this.user.answer = this.loginForm.value.userData.answer;
    console.log(this.user);
    this.loginForm.reset();
  }
}
