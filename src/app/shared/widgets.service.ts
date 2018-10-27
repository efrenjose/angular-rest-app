import { Injectable } from '@angular/core';

@Injectable()
export class WidgetsService {

    widgets = [
        {
            id: 1,
            name: 'Red Widget',
            description: 'This is a red widget'
        },
        {
            id: 2,
            name: 'Orange Widget',
            description: 'This is an orange widget'
        },
        {
            id: 3,
            name: 'Yellow Widget',
            description: 'This is a yellow widget'
        },
        {
            id: 4,
            name: 'Green Widget',
            description: 'This is a green widget'
        },
        {
            id: 5,
            name: 'Blue Widget',
            description: 'This is a blue widget'
        },
        {
            id: 6,
            name: 'Indigo Widget',
            description: 'This is a indigo widget'
        },
        {
            id: 7,
            name: 'Violet Widget',
            description: 'This is a violet widget'
        }
    ]

    constructor() {

    }

    getAll() {
        return this.widgets;
    }

    deleteWidget(widget) {
        this.widgets = this.widgets.filter((x) => x.id !== widget.id);
    }

    createWidget(widget) {
        this.widgets.push(widget);
    }

    saveWidget(widget) {
        this.widgets.map((w) => {
            if (w.id === widget.id) {
                w.name = widget.name;
                w.description = widget.description;
            }
        })
    }
}