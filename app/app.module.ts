import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroesComponent }  from './heroes.component';
import { HeroDetailComponent } from './hero.detail/hero.detail.component';


@NgModule({
  imports: [ BrowserModule,FormsModule ],
  declarations: [ HeroesComponent, HeroDetailComponent,AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
