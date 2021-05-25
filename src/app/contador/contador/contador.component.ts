import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1> {{title}} </h1>
        <h3>La base es: <strong> {{base}} </strong></h3>

        <!--Contador-->
        <button (click)="acumular(- base)"> - {{base}} </button>
        <span> {{ total }} </span>
        <button (click)="acumular(base)"> + {{base}} </button>
    `
    ,/*styleUrls: ['./app.component.css']*/
})
export class ContadorComponent{
    title: string = 'Contador APP';
    base: number = 5;
    total: number = 0;
  
    acumular( valor: number ){
      this.total += valor;
    }
}