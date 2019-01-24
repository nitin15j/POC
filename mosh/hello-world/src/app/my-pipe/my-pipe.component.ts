import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pipe-component',
  template: '{{text | summary | titlecase}}',
  styleUrls: ['./my-pipe.component.css']
})
export class MyPipeComponent implements OnInit {
  text =
    'the rise of the planet of the apes. Brave man always look ahead even in crunch situations in life.';
  constructor() {}

  ngOnInit() {}
}
