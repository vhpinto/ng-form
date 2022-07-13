import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() titles = Array();
  @Input() contents = Array();

  contentToShow = "";

  pushIndex (index: number) {
    this.contentToShow = this.contents[index];
  }
}
