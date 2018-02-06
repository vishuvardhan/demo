import { Injectable } from "@angular/core";
import {Subject} from 'rxjs/Rx'
@Injectable()
export class EventService {
 
     getEvent() {
         return EVENTS
     }

}

const EVENTS = [

]