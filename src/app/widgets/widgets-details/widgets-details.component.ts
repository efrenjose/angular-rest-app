import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Widget } from '../../shared';

@Component({
  selector: 'app-widgets-details',
  templateUrl: './widgets-details.component.html',
  styleUrls: ['./widgets-details.component.css']
})
export class WidgetsDetailsComponent implements OnInit {
  originalName: string;
  selectedWidget: Widget;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set widget(value: Widget){
    if (value) { this.originalName = value.name; }
    this.selectedWidget = Object.assign({}, value);
  }

  constructor() { }

  ngOnInit() {

  }
}
