import { Routes } from '@angular/router'

import { Error404Component } from './app/error/404.component';
import {
    EventsListComponent, EventDetailsComponent, CreateEventComponent
} from './app/events/index'
import { EventRouteActivator } from './app/events/shared/event-route-activator';
import { EventListResolver } from './app/events/event-list-resolver.service';

export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent,
        canDeactivate: ['canDeactivaCreateEvent'] },
    { path: 'events', component: EventsListComponent,
        resolve: {events:EventListResolver} },
    { path: 'events/:id', component: EventDetailsComponent, 
        canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule' }
]