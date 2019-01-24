import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'style-class-binding',
  template: `
            <div> Changing background color with field in component
              <button [style.backgroundColor]="backgroundColor">Save</button>
            </div>
            <div> Changing color based on condition execution
              <button [style.backgroundColor]="isActive ? 'blue':'white'">Conditional</button>
            </div>
            <div>
              <button class="btn btn-primary" [class.active]="isActive">Bootstrap button </button>
            </div>
            `
})
export class StyleClassBindingComponent implements OnInit {
  backgroundColor: string;
  isActive: true;

  constructor() {}

  ngOnInit() {
    this.backgroundColor = 'green';
  }
}
