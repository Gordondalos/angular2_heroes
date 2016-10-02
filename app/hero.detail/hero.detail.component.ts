import { Component, Input } from '@angular/core';
import { Hero } from '../share/hero';


@Component ( {
    selector: 'my-hero-detail',
    templateUrl : 'app/hero.detail/view/hero.detail.component.html',
    styleUrls : [ 'app/hero.detail/view/hero.detail.component.css' ],

} )

export class HeroDetailComponent {
    id: number;
    name: string;

    @Input() hero: Hero;

}