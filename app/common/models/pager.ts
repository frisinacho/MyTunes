import {IPager} from './ipager';

export class Pager implements IPager {

    public pages:number = 0;

    constructor(public itemsPerPage:number, public startIndex:number, public totalResults:number, private maxPages:number = 10) {
        var realMaxPages = Math.ceil(this.totalResults/this.itemsPerPage);
        if (realMaxPages <= this.maxPages) {
            this.pages = realMaxPages;
        } else {
            this.pages = this.maxPages;
        }

    }
}
