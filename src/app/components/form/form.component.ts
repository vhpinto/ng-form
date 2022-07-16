import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      tabsNumber: new FormControl(0, [Validators.required, Validators.min(0)]),
    });
  }
  
  createFormGroup(tabsNumber: number){
    if(this.form.touched){
      this.form = new FormGroup({
        tabsNumber: new FormControl(tabsNumber, [Validators.required, Validators.min(0)]),
      });
    }
    for(let i = 0; i < tabsNumber; i++){
      this.form.addControl("title"+i.toString(), new FormControl('', Validators.required));
      this.form.addControl("content"+i.toString(), new FormControl('', Validators.required));
    }
  }

  tabsToPush = Array();

  @Output() eventToTab = new EventEmitter();

  setArraySize() {
    if(this.form.value.tabsNumber >= 0 && this.form.value.tabsNumber != null){
      this.createFormGroup(this.form.value.tabsNumber);
      this.tabsToPush = Array(this.form.value.tabsNumber);
    }
    else{
      this.tabsToPush = Array(0);
    }
  }

  get registerFormControl() {
    console.log(this.form.controls)
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      this.eventToTab.emit(this.form.value);
    }
  }
}
