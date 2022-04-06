import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Gamer } from 'src/app/models/gamers';
import { GamerService } from 'src/app/services/gamer.service';
import { noWhiteSpace } from 'src/app/validators/validator';

@Component({
  selector: 'app-gamers',
  templateUrl: './gamers.component.html',
  styleUrls: ['./gamers.component.scss']
})
export class GamersComponent implements OnInit {
  gamers: any = [];
  gamers$: Observable<Gamer[]>;
  selectedId?: string;
  gamerReactiveForm!: FormGroup;
 
  constructor(private gamerService: GamerService, private formBuilder: FormBuilder, private fb: FormBuilder) { 
    this.gamers$ = gamerService.all$;

    
  }

  ngOnInit(): void {
  
    this.gamerReactiveForm = this.formBuilder.group({
      name: ['', [Validators.required, noWhiteSpace]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      id:[]
    });
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
    this.gamerReactiveForm.setValue(gamer);
  }

  onCreateGamerReactive() {
    this.saveGamer(this.gamerReactiveForm.value, this.gamerReactiveForm);

  }

  clearForm(gamerForm: NgForm | FormGroup): void {
    this.gamerReactiveForm.reset();
    // this.gamerReactiveForm.reset();
  }

  saveGamer(postData: Gamer, form: NgForm | FormGroup) {
    if (postData.id) {
      this.gamerService.updateGamer(postData).subscribe(() => this.clearForm(form));
    } else {
      this.gamerService.createGamer(postData).subscribe(() => this.clearForm(form));
    }
  }



}
