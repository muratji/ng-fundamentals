import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service';
import { ToasTrService } from '../common/toastr.service'

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcomming Angular Events</h1>
            <hr>
            <div class="row">
                <div *ngFor="let event of events" class="col-md-5">
                    <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
                </div>
            </div>
        </div>
    `
})
export class EventsListComponent implements OnInit {
    events: any[]
    constructor(private eventService: EventService, private toastr: ToasTrService) {

    }

    ngOnInit() {
        this.events = this.eventService.getEvents()
    }

    handleThumbnailClick(eventName: string) {
        console.log(eventName)
        this.toastr.success(eventName)
    }
}