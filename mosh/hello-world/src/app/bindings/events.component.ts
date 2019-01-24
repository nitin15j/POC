import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'event-component',
  template: `<div (click)="onDivClick()">
                <button (click)="onSave($event)">EventBinding</button>  <!-- binding DOM click event with method of component -->
                <input (keyup.enter)="onKeyUp($event)" />  <!-- Filtering events -->
                <input #email (keyup.enter)="onKeyUpForTemplate(email.value)" /> <!-- template variable -->

                <!-- Two-way databiding manually -->
                <input [value]="phoneNo" (keyup.enter)="phoneNo = $event.target.value; onKeyUp2way()" />

                <!-- Two-way databiding optimized and prefered -->
                <input [(ngModel)]="phoneNo" (keyup.enter)="onKeyUp2wayBinding()" />
             </div>
            `
})
export class EventsComponent implements OnInit {
  phoneNo = '123456';
  constructor() {}

  ngOnInit() {}

  // if we need to capture the event parameter we can use $event
  onSave($event) {
    $event.stopPropogation();
    console.log('save button clicked ' + $event);
  }

  /* All the DOMs event buble-up to DOM tree unless handle it with stop propogation
   if we need to stop the event bubling then on click of button  i should stop it using stopPropogation()
   */
  onDivClick() {
    console.log('Div clicked ');
  }

  onKeyUp($event) {
    console.log($event.target.value);
  }
  onKeyUpForTemplate(email) {
    console.log(email);
  }

  onKeyUp2way() {
    console.log(this.phoneNo);
  }

  onKeyUp2wayBinding() {
    console.log(this.phoneNo);
  }
}
