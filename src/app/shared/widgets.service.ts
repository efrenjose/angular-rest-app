import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Widget } from './widget.model';

const BASE_URL = 'http://localhost:3000/widgets/';
const HEADER = {headers: new Headers({'Content-Type': 'application/json'})};

@Injectable()
export class WidgetsService {

    constructor(private http: Http) {

    }

    all() {
        return this.http.get(BASE_URL)
            .map(res => res.json());
    }

    delete(widget: Widget) {
        return this.http.delete(`${BASE_URL}${widget.id}`)
    }

    create(widget: Widget) {
        return this.http.post(`${BASE_URL}`, JSON.stringify(widget), HEADER)
            .map(res => res.json());
    }

    update(widget: Widget) {
        return this.http.patch(`${BASE_URL}${widget.id}`, JSON.stringify(widget), HEADER)
        .map(res => res.json());
    }
}