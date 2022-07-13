import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-form';
  titlesArray = Array();
  contentsArray = Array();

  addTab(formValue: any) {
    this.titlesArray = Array();
    this.contentsArray = Array();
    for(var i in formValue){
      if(i != "tabsNumber"){
        if(i.startsWith("title")){
          this.titlesArray.push(formValue[i])
        }
        else{
          this.contentsArray.push(formValue[i]);
        }
      }
    }
  }
}
