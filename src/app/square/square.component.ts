import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | null;
  @Output() clickEvent = new EventEmitter<void>();

  constructor() {
    this.value = 'X'; //Initializing the value property to 'X'
  }
}
