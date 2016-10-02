import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';

@Injectable ()

export class HeroService {
    getHer () {
        /*Прямая реализация*/
        // return HEROES;


        /*Реализация через ромис*/
        return Promise.resolve(HEROES);
    }
}