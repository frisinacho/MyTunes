import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {MusicService} from './services/music.srv';
import {IAlbum, AlbumImageSize} from './models/ialbum';

@Component({
    selector : 'album',
    template : `
        <div *ngIf="album">
            <div class="page-header">
                <h1>{{ album.name }} <small>{{ album.artist }}</small></h1>
            </div>
            <div class="media">
                  <div class="media-left">
                    <a href="#">
                      <img class="media-object" [src]="album.getImage(imageSize)">
                    </a>
                  </div>
                  <div class="media-body">
                    <ul>
                        <li *ngFor="#song of album.songs">
                            {{ song.name }}
                        </li>
                    </ul>
                  </div>
            </div>
        </div>
    `,
    providers : [MusicService]
})
export class AlbumComponent {

    public album:IAlbum;
    private imageSize:AlbumImageSize = AlbumImageSize.LARGE;

    constructor(private routeParams:RouteParams, private musicService:MusicService) {
        this.getAlbumInfo(routeParams.get("id"));
    }

    getAlbumInfo(id:string) {
        this.musicService.albumInfo(id)
            .subscribe(album => {
                this.album = album;
                var image = this.album.getImage(AlbumImageSize.LARGE);
            });
    }
}
