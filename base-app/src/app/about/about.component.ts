import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <app-info></app-info>
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
