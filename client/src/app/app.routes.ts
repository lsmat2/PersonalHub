import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./homepage/homepage.component').then(mod => mod.HomepageComponent)
    },
    {
        path: 'weather',
        loadComponent: () => import('./weather-app/weather-app.component').then(mod => mod.WeatherAppComponent)
    },
    {
        path: 'todo',
        loadComponent: () => import('./todo-app/todo-app.component').then(mod => mod.TodoAppComponent)
    },
    {
        path: 'news',
        loadComponent: () => import('./news/news.component').then(mod => mod.NewsComponent)
    },
    {
        path: 'discord',
        loadComponent: () => import('./discord/discord.component').then(mod => mod.DiscordComponent)
    },
    {
        path: 'games',
        loadComponent: () => import('./games/games.component').then(mod => mod.GamesComponent)
    },
    {
        path: '**',
        loadComponent: () => import('./page-not-found/page-not-found.component').then(mod => mod.PageNotFoundComponent)
    }
];
