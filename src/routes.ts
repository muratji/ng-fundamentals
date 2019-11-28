import { Routes } from '@angular/router'
import { EventsListComponent } from './app/events/events-list.component';
import { EventDetailsComponent } from './app/events/event-details/event-details.component';
import { CreateEventComponent } from './app/events/create-event';
import { Error404Component } from './app/error/404.component';
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
    { path: 'user', loadChildren: './app/user/user.module#UserModule' }
]