import {Component, OnInit} from '@angular/core'
import{EventService} from './shared/event.service'
import { ToastrService } from '../common/toastr.service';

@Component({
    selector: 'events-list',
    templateUrl: `
        <div *ngfor = "let event for events">
            <h1> Angular2 Components</h1>
            <event-thumbnail   [event] = "events"></event-thumbnail>

        </div>
    ` 
   
})
export class EventsListComponent implements OnInit {
    events : any['']
    constructor (private eventService : EventService, privatetoastrService : ToastrService) {
        
    }

  ngOnInit() {
    this.events = this.eventService.getEvent
  }
}