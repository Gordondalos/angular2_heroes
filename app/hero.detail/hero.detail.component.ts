import { Component, OnInit } from '@angular/core';
import { Hero } from '../share/hero';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HeroService } from "../share/hero.service";
import { Location } from '@angular/common';



@Component ( {
    selector: 'my-hero-detail',
    templateUrl : 'app/hero.detail/view/hero.detail.component.html',
    styleUrls : [ 'app/hero.detail/view/hero.detail.component.css' ],
} )

export class HeroDetailComponent implements OnInit{
    hero: Hero;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private location: Location,
                private _heroService: HeroService){

    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this._heroService.getHero(id).then(hero => this.hero = hero);
        });
    }

    gotoHeroes() {
        let heroId = this.hero ? this.hero.id : null;
        let heroname = this.hero ? this.hero.name : null;

        this.router.navigate(['/heroes', { id: heroId, heroname: heroname }]);
    }

    save(): void {
        this._heroService.update(this.hero)
            .then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }





}