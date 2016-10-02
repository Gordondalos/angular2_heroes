import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { AppComponent }  from './app.component';
import { HeroesComponent }  from './heroes.component';
import { HeroDetailComponent } from './hero.detail.component';

import { HeroService } from './share/hero.service';

import { routing, appRoutingProviders }  from './app.routing';
import { HomeComponent } from "./home.component";
import { HeroSearchComponent }  from './hero-search.component';

import './rxjs-extensions';



@NgModule ( {
    imports : [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    declarations : [ HeroesComponent, HeroDetailComponent, AppComponent, HomeComponent, HeroSearchComponent ],
    bootstrap : [ AppComponent ],
    providers : [ appRoutingProviders, HeroService ],
} )
export class AppModule {
}
