import {Component, Input , Output, EventEmitter} from '@angular/core'

@Component ({
    selector:'event-thumbnail',
    template:  `
     
    <button (click) = "clickeMe()"> Click Me </button>
    `
})
 
 export class EventThumbnailComponent {
    @Input() event:any
    @output eventClick = new EventEmitter()

    clickMe(){
        console.log("clicked")
        
    }
 }