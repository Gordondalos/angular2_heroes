import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';


import { AppComponent }  from './app.component';
import { HeroesComponent }  from './heroes.component';
import { HeroDetailComponent } from './hero.detail/hero.detail.component';

import { HeroService } from './share/hero.service';

import { routing, appRoutingProviders }  from './app.routing';
import { HomeComponent } from "./home.component";


@NgModule ( {
    imports : [ BrowserModule, FormsModule, routing ],
    declarations : [ HeroesComponent, HeroDetailComponent, AppComponent, HomeComponent ],
    bootstrap : [ AppComponent ],
    providers : [ appRoutingProviders, HeroService ],
} )
export class AppModule {
}
