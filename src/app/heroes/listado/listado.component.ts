import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes:string[] = ['Ziggy','Shiki','Rebeca'];
  heroeBorrado:string='';
  borrar():void{
    // console.log('Borrando....');
    this.heroeBorrado = this.heroes.shift()||'';
  }

}
