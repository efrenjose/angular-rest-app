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
        this.reset();
        this.widgets = this.widgetService.getAll();
    }

    reset() {
        this.selectedWidget = { id: null, name: '', description: '' };
    }

    selectWidget(widget) {
        this.selectedWidget = widget;
    }

    saveWidget(widget) {
        if (!widget.id) {
            this.widgetService.createWidget(widget);
            this.reset();
        } else {
            this.widgetService.saveWidget(widget);
            this.reset();
        }
    }

    deleteWidget(widget) {
        this.widgetService.deleteWidget(widget);
        this.widgets = this.widgetService.getAll();
        this.reset();
    }
}