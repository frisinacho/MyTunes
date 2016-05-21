import {Component, OnInit, Input} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {IAlbum, AlbumImageSize} from './models/ialbum';
import {MusicService} from './services/music.srv';
import {AlbumComponent} from './album.component';
import {EllipsisPipe} from '../common/pipes/ellipsis.pipe';
import {HightlightDirective} from '../common/directives/highlight.directive';
import {PaginationComponent} from '../common/pagination.component';
import {IPager} from '../common/models/ipager';

@Component({
    selector : 'albums-component',
    template : `
        <ul class="media-list">
            <li class="media" *ngFor="#album of albums" [routerLink]="['Album', { id : album.id }]" appHighlight [hoverColor]="'whitesmoke'" [activeColor]="'gray'">
                <div class="media-left">
                    <a>
                        <img class="media-object" [src]="album.getImage(albumImageSize)">
                    </a>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">{{ album.name | ellipsis:40}}</h4>
                    <p>{{ album.artist }}</p>
                </div>
            </li>
        </ul>
        <pagination-component [pager]="pager" [pathName]="'Albums'"></pagination-component>
    `,
    providers  : [MusicService],
    directives : [ROUTER_DIRECTIVES, HightlightDirective, PaginationComponent],
    pipes      : [EllipsisPipe]
})
export class AlbumsComponent implements OnInit {

    public albums:Array<IAlbum> = [];
    public albumImageSize:AlbumImageSize = AlbumImageSize.MEDIUM;
    public pager:IPager;

    constructor(private musicService : MusicService, private routeParams:RouteParams) {}

    ngOnInit() {
        this.albumsSearch(this.routeParams.get("query"), this.routeParams.get("page"));
    }

    albumsSearch(query:string, page:any) {
        if (query) {
            this.musicService.albumsSearch(query, parseInt(page))
                .subscribe(res => {
                    this.albums = res.albums;
                    this.pager = res.pager;
                });
        } else {
            this.albums = [];
        }
    }
}
