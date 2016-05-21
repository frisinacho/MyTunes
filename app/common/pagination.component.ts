import {Component, Input, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {ForRangeDirective} from './directives/forRange.directive';
import {IPager} from '../common/models/ipager';

@Component({
    selector : 'pagination-component',
    template : `
        <nav *ngIf="pager">
          <ul class="pagination">
            <li *forRange="pager.pages; #i=index" (click)="goToPage(i)"><a>{{ i }}</a></li>
          </ul>
        </nav>
    `,
    directives : [ForRangeDirective]
})
export class PaginationComponent implements OnInit{
    @Input() pager:IPager;
    @Input() pathName:string;

    private query:string;

    constructor(private router:Router, private routeParams:RouteParams) {

    }

    ngOnInit():any {
        this.query = this.routeParams.get("query");
    }


    goToPage(i:number) {
        var params = {}
        if (this.query) {
            params["query"] = this.query;
        }
        params["page"] = i;
        this.router.navigate([this.pathName, params]);
    }
}
