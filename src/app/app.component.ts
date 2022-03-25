import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sono Antonio';
  allowPropertyBinding= true;

  constructor(){
    setTimeout(()=>{
      this.title ='Abilitato';
      }, 2000)
    }

    disableButton(){
      this.allowPropertyBinding=false;
    }
  
    ngOnInit():void{
      setTimeout(()=>{
      this.title ='Non sono Antonio';
      }, 5000)
    }
  }

