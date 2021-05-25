import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
    //,styleUrls: ['heroe.component.css']
})
export class HeroesComponent{
    nombre: string = 'IronMan';
    edad: number = 45;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase(); //Funcion capitalizar palabra
    }

    obtenerNombre(): string{
        return `${ this.nombre } - ${ this.edad } `; // this.nombre + ' - ' + this.edad
    }

    cambiarNombre(): void{
        this.nombre = 'Spiderman';
    }
    cambiarEdad(): void{
        this.edad = 20;
    }
}