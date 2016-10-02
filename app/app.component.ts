import { Component, OnInit } from '@angular/core';
import { Hero } from './share/hero';
import { HeroService } from './share/hero.service';


@Component ( {
    selector : 'my-app',
    templateUrl : 'app/view/app.component.html',
    styleUrls : [ 'app/view/app.component.css' ],
    providers : [ HeroService ] // Подключил сервис

} )

export class AppComponent implements OnInit { // имплементировал интерфейс онинит, чтобы реализовать метод онинит
    title = 'Tour of heroes';
    heroes : Hero[];
    selectedHero : Hero;


    constructor ( private _heroService : HeroService ) { // тут обьявлена приватная переменная херовыйсервис, она автоматом обьявлет переменную этого класса

    }

    ngOnInit () {       // реализовал метод он инит чтобы в нем вызвать создание- получение героев
        this.getHeroes ();
    }

    getHeroes () {
        this.heroes = this._heroService.getHer (); // вызвал метод
    }

    onSelect ( hero : Hero ) {
        this.selectedHero = hero;
    }
}



