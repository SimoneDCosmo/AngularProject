import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Gamer } from 'src/app/models/gamers';
import { GamerService } from 'src/app/services/gamer.service';

@Component({
  selector: 'app-gamers',
  templateUrl: './gamers.component.html',
  styleUrls: ['./gamers.component.scss']
})
export class GamersComponent implements OnInit {
  gamers: any = [];
  gamers$: Observable<Gamer[]>;
 
  constructor(private gamerService: GamerService) { 
    this.gamers$ = gamerService.all$;
  }

  ngOnInit(): void {
    
  }


  onSubmit(form: NgForm)  {
    console.log(form);
    console.log(form.value);
    if (form.valid) {
      this.gamers.push(form.value);
      this.gamerService.createGamer(form.value).subscribe();
    }
  }


  onDelete(gamerId?: string) {
    if (gamerId){
      this.gamerService.deleteGamer(gamerId).subscribe();
    }
  }
}
