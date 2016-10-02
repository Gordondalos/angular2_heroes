import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent }    from './heroes.component';
import { HomeComponent } from "./home.component";


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent }
];
export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
