import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    tabsNumber: new FormControl(0, [Validators.required]),
    title: new FormControl("", [Validators.required]),
    content: new FormControl("", [Validators.required]),
  });

  tabsToPush = Array();

  @Output() eventToTab = new EventEmitter();

  setArraySize() {
    this.tabsToPush = Array(this.form.value.tabsNumber);
  }

  onSubmit() {
    this.eventToTab.emit(this.form.value);
  }
}
