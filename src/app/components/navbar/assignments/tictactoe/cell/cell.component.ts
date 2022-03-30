import { Component, Input, OnInit } from '@angular/core';
import { CellStatus } from '../tipi/types';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
  
  @Input() status ?: CellStatus = null;

  constructor() { }

  ngOnInit(): void {
  }

 
}
