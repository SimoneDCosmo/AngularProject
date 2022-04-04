import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
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
  selectedId?: string;
  gamerReactiveForm: FormGroup;
 
  constructor(private gamerService: GamerService, private formBuilder: FormBuilder) { 
    this.gamers$ = gamerService.all$;

    this.gamerReactiveForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      description: ['', [Validators.required, Validators.minLength(5)]]
    });
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

  onSelectGamer(gamer: Gamer) {
    this.selectedId = gamer.id;
  }

  onCreateGamerReactive() {
    this.gamerService.createGamer(this.gamerReactiveForm.value).subscribe();

  }




}
