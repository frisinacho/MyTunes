import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {ISearchQuery} from './models/isearchquery';

@Component({
    selector : 'search-component',
    template : `
            <div class="form-group">
                <input type="text" placeholder="Search" class="form-control" [(ngModel)]="_query" (keypress)="search(_query, $event)"/>
            </div>
            <button type="button" class="btn btn-default" (click)="search(_query)">Search</button>
    `
})
export class SearchComponent {

    @Input() query:string;
    @Output() queryChange = new EventEmitter();

    constructor() {}

    search(_query:string, $event?:KeyboardEvent) {
        if(!$event || $event.keyCode == 13) {
            this.queryChange.next(_query);
        }
    }
}
