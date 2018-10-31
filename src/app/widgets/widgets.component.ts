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
        this.loadWidgets();
        this.reset();
    }

    loadWidgets() {
        this.widgetService.all()
            .subscribe(widgets => this.widgets = widgets);
    }

    reset() {
        this.selectedWidget = { id: null, name: '', description: '' };
    }

    selectWidget(widget) {
        this.selectedWidget = widget;
    }

    saveWidget(widget) {
        if (!widget.id) {
            this.createWidget(widget);
        } else {
            this.updateWidget(widget);
        }
    }

    createWidget(widget) {
        this.widgetService.create(widget)
                .subscribe(result => {
                    this.loadWidgets();
                    this.reset();
                });
    }

    updateWidget(widget) {
        this.widgetService.update(widget)
                .subscribe(result => {
                    this.loadWidgets();
                    this.reset();
                });
    }

    deleteWidget(widget) {
        this.widgetService.delete(widget)
            .subscribe(result => {
                this.loadWidgets();
                this.reset();
            })
    }
}