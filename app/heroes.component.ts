import { Component, OnInit } from '@angular/core';
import { Hero } from './share/hero';
import { HeroService } from './share/hero.service';

@Component ( {
    selector : 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
} )

export class HeroesComponent implements OnInit { // имплементировал интерфейс онинит, чтобы реализовать метод онинит

    heroes : Hero[];
    selectedHero : Hero;

    ngOnInit () {       // реализовал метод он инит чтобы в нем вызвать создание- получение героев
        this.getHeroes ();
    }

     constructor ( private _heroService : HeroService ) { // тут обьявлена приватная переменная херовыйсервис, она автоматом обьявлет переменную этого класса

    }

    getHeroes () {
        // прямая реализация
        //this.heroes = this._heroService.getHer(); // вызвал метод

        /*Реализвация через промис*/
         this._heroService.getHer().then(heroes=>this.heroes = heroes); // вызвал метод
    }

    onSelect ( hero : Hero ) {
        this.selectedHero = hero;
    }
}



