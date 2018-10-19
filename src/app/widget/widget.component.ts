import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-widget',
    templateUrl: './widget.component.html',
    styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

    message: string;

    constructor() {

    }

    ngOnInit(): void {
        //throw new Error("Method not implemented.");
        this.message = 'Hello Widget!!';
    }
}