import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TicTacToeSquareComponent } from '../tic-tac-toe-square/tic-tac-toe-square.component';

@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports: [ MatButtonModule, TicTacToeSquareComponent ],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.scss'
})
export class TicTacToeComponent implements OnInit {

  squares: any[];
  xIsNext: boolean;
  winner: string | null;

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if(!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    
    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];

    for(let i=0; i<lines.length; i++) {
      const [a,b,c] = lines[i];
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        return this.squares[c];
      }
    }
    return null;
  }
}
