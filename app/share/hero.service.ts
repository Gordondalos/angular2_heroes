import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from '../share/hero';



let heroesPromise = Promise.resolve(HEROES);

@Injectable ()
export class HeroService {



    getHer (): Promise<Hero[]> {
        /*Прямая реализация*/
        // return HEROES;

        /*Реализация через ромис*/
        return heroesPromise
    }

    getHero(id: number | string) {
        return heroesPromise.then(heroes => heroes.find(hero => hero.id === +id));
    }
}