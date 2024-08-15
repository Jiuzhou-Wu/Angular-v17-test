import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe-square',
  standalone: true,
  imports: [],
  templateUrl: './tic-tac-toe-square.component.html',
  styleUrl: './tic-tac-toe-square.component.scss'
})
export class TicTacToeSquareComponent {

  @Input()
  val: string| null;

  @Input()
  disable: string| null;

  @Output()
  click = new EventEmitter();
}
