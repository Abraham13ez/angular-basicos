import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    
        <h1> {{titulo}} </h1>

        <button (click)="acomular(base)" >+1</button>

        <span> {{numero}} </span>

        <button (click)="acomular(-base)" >-1</button>

    `
})
export class ContadorComponent{
    titulo: string = 'Contador app';
    numero: number = 10;
    base  : number = 5;
    sumar(){
      this.numero += 1;
    }
  
    restar(){
      this.numero -= 1;
    }
  
    acomular(valor:number){
      this.numero += valor;
    }
}