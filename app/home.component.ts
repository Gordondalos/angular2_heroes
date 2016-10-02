import { Component, OnInit } from "@angular/core";
import { HeroService } from './share/hero.service';
import { Hero } from './share/hero';
import { Router } from '@angular/router';



@Component({
    moduleId: module.id,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{


    heroes: Hero[] = [];

    constructor(private _heroService: HeroService,  private router: Router ) {}

    ngOnInit(){
        this.getHeroes ();
    }

    getHeroes () {
        /*Реализвация через промис*/
        this._heroService.getHer ()
            .then(heroes => this.heroes = heroes.slice(1, 5));

    }

    gotoDetail(hero: Hero): void {
        let link = ['/hero', hero.id];
        this.router.navigate(link);
    }


}