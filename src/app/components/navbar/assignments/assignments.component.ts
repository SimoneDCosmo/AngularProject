import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {
  text = '';
  text2 = '';
  users:string[] = [];
  constructor() {}

  ngOnInit(): void {}

  getText()  {
    return this.text;
  }

  aggiungi () {
   this.users.push(this.text);
   console.log(this.users.length);
   this.resetInput();
  }

  resetInput() {
    this.text = '';
  }

  reset() {
    this.resetInput();
    this.users.length = 0;
  }

}
