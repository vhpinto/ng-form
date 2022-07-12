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

  @Input() tabs = Array();

  contentToShow = "";

  pushIndex (index: number) {
    this.contentToShow = this.tabs[index].content;
  }
}
