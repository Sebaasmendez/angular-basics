import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'IronMan', 'Thor', 'Hulk', 'Cap']
  heroeBorrado: string = '';


  borrarHeroes(){
    //console.log('Borrando...');

    //this.heroes.splice(0, 1); //Corta elementos indicando posicion y cuantos valores
    //this.heroes.shift(); //Borra el primero de la fila

    //console.log(this.heroes);
    this.heroeBorrado = this.heroes.shift() || ''; //Almaceno el que borre

  }
}
