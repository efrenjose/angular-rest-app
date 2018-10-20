import { Component, OnInit } from '@angular/core';
import { WidgetsService, Widget } from '../shared';

@Component({
    selector: 'app-widgets',
    templateUrl: './widgets.component.html',
    styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

    selectedWidget: Widget;
    widgets: Widget[];

    constructor(private widgetService: WidgetsService) {

    }

    ngOnInit(): void {
        this.widgets = this.widgetService.getAll();
    }

    selectWidget(widget) {
        this.selectedWidget = widget;
    }
}