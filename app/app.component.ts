import { Component, Input } from '@angular/core';
import { HeroService } from './share/hero.service';


@Component ( {
    selector : 'my-app',
    templateUrl : 'app/view/app.component.html',
    styleUrls : [ 'app/view/app.component.css' ],
    providers : [ HeroService ] // Подключил сервис

} )


export class AppComponent {
    title : string;

    constructor () {
        this.title = "Tour of Heroes";
    }

}