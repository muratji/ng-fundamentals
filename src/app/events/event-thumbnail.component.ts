import { Component, Input } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `
    <h2>{{ event.name }}</h2>
    <div class="well hoverwell thumnail">
      <div>Date: {{ event.date }}</div>
      <div>Time: {{ event.time }}</div>
      <div>Price: \${{ event.price }}</div>
      <div>
        <span>Location: {{ event.location.address }}</span>
        <span class="pad-left">{{ event.location.city }}, {{ event.location.country }}</span>
      </div>
    </div>
  `,
  styles: [`
    .pad-left { padding-left: 10px;}
    .well div { color: #bbb;}
  `]

})
export class EventThumbnailComponent {
    @Input() event: any
}