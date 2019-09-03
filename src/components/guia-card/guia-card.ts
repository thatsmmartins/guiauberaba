import { Component } from '@angular/core';

@Component({
  selector: 'guia-card',
  templateUrl: 'guia-card.html'
})
export class GuiaCardComponent {

  text: string;

  constructor() {
    console.log('Hello GuiaCardComponent Component');
    this.text = 'Hello World';
  }

}
