import { Component, OnInit } from '@angular/core';
import { Board, Player } from './tipi/types';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.scss']
})
export class TictactoeComponent implements OnInit {

  currentPlayer : Player = 1;
  board: Board = [
    [1, null, null],
    [null, 1, null],
    [null, null, 1]
  ];


  onCellClick(x: number, y: number) {
    this.board[x][y] = this.currentPlayer;
    alert(x);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
