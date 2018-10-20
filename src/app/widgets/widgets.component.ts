import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-widgets',
    templateUrl: './widgets.component.html',
    styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

    message: string;
    color = 'blue';

    constructor() {

    }

    ngOnInit(): void {
        //throw new Error("Method not implemented.");
        this.message = 'Hello Widgets!!';
    }

    echo(color) {
        console.log('color:', color);
    }
}