import { Component, OnInit } from '@angular/core';
import { Hero } from './share/hero';
import { HeroService } from './share/hero.service';
import { Router } from '@angular/router'

@Component ( {
    moduleId: module.id,
    selector : 'my-heroes',
    templateUrl : 'heroes.component.html',
    styleUrls : [ 'heroes.component.css' ],
} )

export class HeroesComponent implements OnInit { // имплементировал интерфейс онинит, чтобы реализовать метод онинит

    heroes : Hero[] = [];
    selectedHero : Hero;

    ngOnInit () {       // реализовал метод он инит чтобы в нем вызвать создание- получение героев
        this.getHeroes ();
    }

    constructor (private router: Router, private _heroService : HeroService ) { // тут обьявлена приватная переменная херовыйсервис, она автоматом обьявлет переменную этого класса

    }

    getHeroes () {
        // прямая реализация
        //this.heroes = this._heroService.getHer(); // вызвал метод

        /*Реализвация через промис*/
        this._heroService.getHer ().then ( heroes=>this.heroes = heroes ); // вызвал метод
    }

    onSelect ( hero : Hero ) {
        this.router.navigate ( [ '/hero', hero.id ] );
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this._heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }

    delete(hero: Hero): void {
        this._heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            });
    }


}



