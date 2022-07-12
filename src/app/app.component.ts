import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-form';
  tabsArray = Array();

  addTab(formValue: any) {
    this.tabsArray[formValue.tabsNumber] = formValue;
    console.log(this.tabsArray);
  }
}
