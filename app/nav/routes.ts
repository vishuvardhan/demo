import{Routes} from '@angular/router'
import { resolve } from 'dns';
import { EventListResolver } from '../events/shared/event-list-resolver.service';


export const appRoutes = [

     { path: 'events', component: 'EventsListComponent' ,  resolve : {events : EventListResolver} },
     {path : 'events/id' , component:'EventsDetailComponent'},
     {path : '', redirectTo : 'events' , component: 'EventsListComponent', pathMatch: 'full' }

]

