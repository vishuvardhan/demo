import {NgModule} from '@angular/core'
import { BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import { EventsAppComponent } from './events-app.component'
import { EventsListComponent} from './events/events-list.component'
import {EventThumbnailComponent} from './events/events-thumbnail.component'
import{NavBarComponent} from './nav/navbar.component'
import{EventService} from './events/shared/event.service'
import { ToastrService } from './common/toastr.service'
import{appRoutes} from './nav/routes'
import {CreateEventComponent} from './events/create-event.component'
import {EventListResolver } from './events/shared/event-list-resolver.service'

@NgModule ({
    imports : [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        CreateEventComponent
    ],
    providers:[EventService, ToastrService, EventListResolver],
    bootstrap: [EventsAppComponent]
})
export class AppModule {}